import { mdiUploadLockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UploadLockOutline(props: IconComponentProps) {
  return <Icon path={mdiUploadLockOutline} {...props} />;
}

export { mdiUploadLockOutline as path };
