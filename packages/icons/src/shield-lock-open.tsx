import { mdiShieldLockOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldLockOpen(props: IconComponentProps) {
  return <Icon path={mdiShieldLockOpen} {...props} />;
}

export { mdiShieldLockOpen as path };
