import { mdiAccountSyncOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountSyncOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountSyncOutline} {...props} />;
}

export { mdiAccountSyncOutline as path };
