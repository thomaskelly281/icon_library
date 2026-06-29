import { mdiCameraOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraOutline(props: IconComponentProps) {
  return <Icon path={mdiCameraOutline} {...props} />;
}

export { mdiCameraOutline as path };
