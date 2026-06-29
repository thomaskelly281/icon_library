import { mdiShieldCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiShieldCheckOutline} {...props} />;
}

export { mdiShieldCheckOutline as path };
