import { mdiShieldAccountOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldAccountOutline(props: IconComponentProps) {
  return <Icon path={mdiShieldAccountOutline} {...props} />;
}

export { mdiShieldAccountOutline as path };
