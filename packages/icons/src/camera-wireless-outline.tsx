import { mdiCameraWirelessOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraWirelessOutline(props: IconComponentProps) {
  return <Icon path={mdiCameraWirelessOutline} {...props} />;
}

export { mdiCameraWirelessOutline as path };
