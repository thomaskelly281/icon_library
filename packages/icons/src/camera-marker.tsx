import { mdiCameraMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraMarker(props: IconComponentProps) {
  return <Icon path={mdiCameraMarker} {...props} />;
}

export { mdiCameraMarker as path };
