import { mdiUploadLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UploadLock(props: IconComponentProps) {
  return <Icon path={mdiUploadLock} {...props} />;
}

export { mdiUploadLock as path };
