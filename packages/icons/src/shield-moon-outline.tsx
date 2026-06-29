import { mdiShieldMoonOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldMoonOutline(props: IconComponentProps) {
  return <Icon path={mdiShieldMoonOutline} {...props} />;
}

export { mdiShieldMoonOutline as path };
