import { mdiDownloadLockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DownloadLockOutline(props: IconComponentProps) {
  return <Icon path={mdiDownloadLockOutline} {...props} />;
}

export { mdiDownloadLockOutline as path };
