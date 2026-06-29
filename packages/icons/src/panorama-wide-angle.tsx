import { mdiPanoramaWideAngle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PanoramaWideAngle(props: IconComponentProps) {
  return <Icon path={mdiPanoramaWideAngle} {...props} />;
}

export { mdiPanoramaWideAngle as path };
