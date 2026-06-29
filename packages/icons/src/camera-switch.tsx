import { mdiCameraSwitch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraSwitch(props: IconComponentProps) {
  return <Icon path={mdiCameraSwitch} {...props} />;
}

export { mdiCameraSwitch as path };
