import { mdiPanorama } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Panorama(props: IconComponentProps) {
  return <Icon path={mdiPanorama} {...props} />;
}

export { mdiPanorama as path };
