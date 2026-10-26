import { publicAssetExists } from "@/lib/assets";
import type { Project, ProjectImage } from "@/types/portfolio";

// Returns the image only if its file exists, so no broken references render.
export function getProjectImage(project: Project): ProjectImage | undefined {
  return project.image && publicAssetExists(project.image.src)
    ? project.image
    : undefined;
}
