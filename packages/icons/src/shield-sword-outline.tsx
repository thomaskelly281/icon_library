import { mdiShieldSwordOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldSwordOutline(props: IconComponentProps) {
  return <Icon path={mdiShieldSwordOutline} {...props} />;
}

export { mdiShieldSwordOutline as path };
