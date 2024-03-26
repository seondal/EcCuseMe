export default async function sitemap() {
  const baseUrl = "https://ecc-navigator.vercel.app";

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/facility`, lastModified: new Date() },
  ];
}
