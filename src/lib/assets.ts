import { existsSync } from "node:fs";
import path from "node:path";

// Evaluated at build/prerender time; rebuild after adding the asset.
export function publicAssetExists(publicPath: string): boolean {
  return existsSync(path.join(process.cwd(), "public", publicPath));
}
