import { mdiCameraRetake } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraRetake(props: IconComponentProps) {
  return <Icon path={mdiCameraRetake} {...props} />;
}

export { mdiCameraRetake as path };
