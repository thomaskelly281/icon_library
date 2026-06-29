import { mdiCameraLockOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraLockOpen(props: IconComponentProps) {
  return <Icon path={mdiCameraLockOpen} {...props} />;
}

export { mdiCameraLockOpen as path };
