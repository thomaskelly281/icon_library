import { mdiCameraRetakeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraRetakeOutline(props: IconComponentProps) {
  return <Icon path={mdiCameraRetakeOutline} {...props} />;
}

export { mdiCameraRetakeOutline as path };
