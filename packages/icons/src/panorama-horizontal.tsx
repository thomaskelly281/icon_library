import { mdiPanoramaHorizontal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PanoramaHorizontal(props: IconComponentProps) {
  return <Icon path={mdiPanoramaHorizontal} {...props} />;
}

export { mdiPanoramaHorizontal as path };
