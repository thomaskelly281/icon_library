import { mdiCameraTimer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraTimer(props: IconComponentProps) {
  return <Icon path={mdiCameraTimer} {...props} />;
}

export { mdiCameraTimer as path };
