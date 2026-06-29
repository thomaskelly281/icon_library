import { mdiShieldRefreshOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldRefreshOutline(props: IconComponentProps) {
  return <Icon path={mdiShieldRefreshOutline} {...props} />;
}

export { mdiShieldRefreshOutline as path };
