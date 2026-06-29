import { mdiCameraLockOpenOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraLockOpenOutline(props: IconComponentProps) {
  return <Icon path={mdiCameraLockOpenOutline} {...props} />;
}

export { mdiCameraLockOpenOutline as path };
