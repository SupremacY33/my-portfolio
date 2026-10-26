// Configure via NEXT_PUBLIC_SITE_URL once the production domain is known.
function parse(value: string | undefined): URL | undefined {
  if (!value) return undefined;
  try {
    return new URL(value);
  } catch {
    return undefined;
  }
}

export const siteUrl = parse(process.env.NEXT_PUBLIC_SITE_URL);
