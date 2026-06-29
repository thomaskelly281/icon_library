import { mdiCameraLockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraLockOutline(props: IconComponentProps) {
  return <Icon path={mdiCameraLockOutline} {...props} />;
}

export { mdiCameraLockOutline as path };
