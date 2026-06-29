import { mdiUploadOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UploadOff(props: IconComponentProps) {
  return <Icon path={mdiUploadOff} {...props} />;
}

export { mdiUploadOff as path };
