import { mdiCameraAccount } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraAccount(props: IconComponentProps) {
  return <Icon path={mdiCameraAccount} {...props} />;
}

export { mdiCameraAccount as path };
