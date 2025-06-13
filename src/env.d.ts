interface ImportMetaEnv {
  readonly PUBLIC_EMAILJS_PUB_KEY: string;
  readonly PUBLIC_EMAILJS_TEMPLATE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
