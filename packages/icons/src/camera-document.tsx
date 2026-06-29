import { mdiCameraDocument } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraDocument(props: IconComponentProps) {
  return <Icon path={mdiCameraDocument} {...props} />;
}

export { mdiCameraDocument as path };
