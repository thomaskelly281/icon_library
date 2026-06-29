import { mdiCameraWireless } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraWireless(props: IconComponentProps) {
  return <Icon path={mdiCameraWireless} {...props} />;
}

export { mdiCameraWireless as path };
