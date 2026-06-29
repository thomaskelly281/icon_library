import { mdiShieldKeyOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldKeyOutline(props: IconComponentProps) {
  return <Icon path={mdiShieldKeyOutline} {...props} />;
}

export { mdiShieldKeyOutline as path };
