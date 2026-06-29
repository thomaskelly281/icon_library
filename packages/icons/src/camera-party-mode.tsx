import { mdiCameraPartyMode } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraPartyMode(props: IconComponentProps) {
  return <Icon path={mdiCameraPartyMode} {...props} />;
}

export { mdiCameraPartyMode as path };
