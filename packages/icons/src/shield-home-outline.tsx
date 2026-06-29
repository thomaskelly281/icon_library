import { mdiShieldHomeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldHomeOutline(props: IconComponentProps) {
  return <Icon path={mdiShieldHomeOutline} {...props} />;
}

export { mdiShieldHomeOutline as path };
