import { mdiShieldLockOpenOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldLockOpenOutline(props: IconComponentProps) {
  return <Icon path={mdiShieldLockOpenOutline} {...props} />;
}

export { mdiShieldLockOpenOutline as path };
