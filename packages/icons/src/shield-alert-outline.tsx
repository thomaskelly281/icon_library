import { mdiShieldAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiShieldAlertOutline} {...props} />;
}

export { mdiShieldAlertOutline as path };
