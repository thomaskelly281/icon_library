import { mdiCameraImage } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraImage(props: IconComponentProps) {
  return <Icon path={mdiCameraImage} {...props} />;
}

export { mdiCameraImage as path };
