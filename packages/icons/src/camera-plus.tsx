import { mdiCameraPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraPlus(props: IconComponentProps) {
  return <Icon path={mdiCameraPlus} {...props} />;
}

export { mdiCameraPlus as path };
