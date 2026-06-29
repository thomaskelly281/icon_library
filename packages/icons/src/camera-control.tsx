import { mdiCameraControl } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraControl(props: IconComponentProps) {
  return <Icon path={mdiCameraControl} {...props} />;
}

export { mdiCameraControl as path };
