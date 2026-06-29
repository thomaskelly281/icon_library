import { mdiCameraFlip } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraFlip(props: IconComponentProps) {
  return <Icon path={mdiCameraFlip} {...props} />;
}

export { mdiCameraFlip as path };
