import { mdiCameraRear } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraRear(props: IconComponentProps) {
  return <Icon path={mdiCameraRear} {...props} />;
}

export { mdiCameraRear as path };
