import { mdiShieldSyncOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldSyncOutline(props: IconComponentProps) {
  return <Icon path={mdiShieldSyncOutline} {...props} />;
}

export { mdiShieldSyncOutline as path };
