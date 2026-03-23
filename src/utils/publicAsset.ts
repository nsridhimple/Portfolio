/**
 * Prefix paths to files in `public/` with Vite's BASE_URL.
 * Needed for GitHub Pages (`base: /Portfolio/`) — plain `/SRI.jpeg` would 404.
 */
export function publicAsset(path: string | undefined): string {
  if (!path) return '';
  if (/^https?:\/\//i.test(path)) return path;
  const trimmed = path.replace(/^\/+/, '');
  const base = import.meta.env.BASE_URL;
  return `${base}${trimmed}`;
}
