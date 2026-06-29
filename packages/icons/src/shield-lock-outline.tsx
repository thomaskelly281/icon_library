import { mdiShieldLockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldLockOutline(props: IconComponentProps) {
  return <Icon path={mdiShieldLockOutline} {...props} />;
}

export { mdiShieldLockOutline as path };
