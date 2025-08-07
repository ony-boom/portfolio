{
  description = "My website";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
  }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = nixpkgs.legacyPackages.${system};
      pkgJson = builtins.fromJSON (builtins.readFile (self + "/package.json"));

      pname = pkgJson.name;
      version = pkgJson.version;
      src = self;

      pnpm = pkgs.pnpm_9;
      node = pkgs.nodejs_latest;
      makeWrapper = pkgs.makeWrapper;
    in {
      packages.default = pkgs.stdenv.mkDerivation {
        inherit pname version src;

        pnpmDeps = pnpm.fetchDeps {
          inherit pname version src;
          fetcherVersion = 1;
          hash = "sha256-NUxXVZQxbM0PYL/qzP1aihVu+Q7kxHjtTrg04VI/r1A=";
        };

        nativeBuildInputs = [
          node
          pnpm.configHook
          makeWrapper
        ];

        buildInputs = [node];

        buildPhase = ''
          runHook preBuild
          pnpm install --frozen-lockfile
          pnpm build
          runHook postBuild
        '';

        installPhase = ''
          runHook preInstall

          mkdir -p $out/lib $out/bin
          cp -r dist/* $out/lib/

          # Include runtime dependencies
          cp -r node_modules $out/lib/

          # Create a wrapper script
          makeWrapper ${node}/bin/node $out/bin/ony-world \
            --add-flags "$out/lib/server/entry.mjs" \
            --set NODE_PATH "$out/lib/node_modules"

          runHook postInstall
        '';
      };
    });
}
