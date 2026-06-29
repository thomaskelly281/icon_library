import { mdiCameraIris } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraIris(props: IconComponentProps) {
  return <Icon path={mdiCameraIris} {...props} />;
}

export { mdiCameraIris as path };
