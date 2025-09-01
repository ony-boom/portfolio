export async function GET() {
  const script = await fetch(
    "https://raw.githubusercontent.com/ony-boom/home-manager/refs/heads/main/install.sh",
  ).then((res) => res.text());

  return new Response(script);
}
