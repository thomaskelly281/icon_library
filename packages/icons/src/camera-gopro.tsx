import { mdiCameraGopro } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraGopro(props: IconComponentProps) {
  return <Icon path={mdiCameraGopro} {...props} />;
}

export { mdiCameraGopro as path };
