import { mdiCameraOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraOff(props: IconComponentProps) {
  return <Icon path={mdiCameraOff} {...props} />;
}

export { mdiCameraOff as path };
