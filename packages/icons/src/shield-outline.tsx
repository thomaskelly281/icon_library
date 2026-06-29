import { mdiShieldOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldOutline(props: IconComponentProps) {
  return <Icon path={mdiShieldOutline} {...props} />;
}

export { mdiShieldOutline as path };
