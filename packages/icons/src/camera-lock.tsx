import { mdiCameraLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraLock(props: IconComponentProps) {
  return <Icon path={mdiCameraLock} {...props} />;
}

export { mdiCameraLock as path };
