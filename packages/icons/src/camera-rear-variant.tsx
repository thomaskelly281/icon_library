import { mdiCameraRearVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraRearVariant(props: IconComponentProps) {
  return <Icon path={mdiCameraRearVariant} {...props} />;
}

export { mdiCameraRearVariant as path };
