import { mdiPanoramaVertical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PanoramaVertical(props: IconComponentProps) {
  return <Icon path={mdiPanoramaVertical} {...props} />;
}

export { mdiPanoramaVertical as path };
