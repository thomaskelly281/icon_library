import { mdiCameraFrontVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraFrontVariant(props: IconComponentProps) {
  return <Icon path={mdiCameraFrontVariant} {...props} />;
}

export { mdiCameraFrontVariant as path };
