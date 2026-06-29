import { mdiCameraDocumentOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraDocumentOff(props: IconComponentProps) {
  return <Icon path={mdiCameraDocumentOff} {...props} />;
}

export { mdiCameraDocumentOff as path };
