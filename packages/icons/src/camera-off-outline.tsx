import { mdiCameraOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraOffOutline(props: IconComponentProps) {
  return <Icon path={mdiCameraOffOutline} {...props} />;
}

export { mdiCameraOffOutline as path };
