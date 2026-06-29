import { mdiEmailSyncOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailSyncOutline(props: IconComponentProps) {
  return <Icon path={mdiEmailSyncOutline} {...props} />;
}

export { mdiEmailSyncOutline as path };
