import { mdiCameraFront } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraFront(props: IconComponentProps) {
  return <Icon path={mdiCameraFront} {...props} />;
}

export { mdiCameraFront as path };
