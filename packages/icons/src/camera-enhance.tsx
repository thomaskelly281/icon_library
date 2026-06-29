import { mdiCameraEnhance } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraEnhance(props: IconComponentProps) {
  return <Icon path={mdiCameraEnhance} {...props} />;
}

export { mdiCameraEnhance as path };
