import { mdiCameraFlipOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraFlipOutline(props: IconComponentProps) {
  return <Icon path={mdiCameraFlipOutline} {...props} />;
}

export { mdiCameraFlipOutline as path };
