import { mdiShieldLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldLock(props: IconComponentProps) {
  return <Icon path={mdiShieldLock} {...props} />;
}

export { mdiShieldLock as path };
