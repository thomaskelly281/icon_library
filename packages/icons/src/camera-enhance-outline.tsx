import { mdiCameraEnhanceOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraEnhanceOutline(props: IconComponentProps) {
  return <Icon path={mdiCameraEnhanceOutline} {...props} />;
}

export { mdiCameraEnhanceOutline as path };
