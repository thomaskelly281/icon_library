import { mdiCameraMarkerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraMarkerOutline(props: IconComponentProps) {
  return <Icon path={mdiCameraMarkerOutline} {...props} />;
}

export { mdiCameraMarkerOutline as path };
