import { mdiShieldAccount } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldAccount(props: IconComponentProps) {
  return <Icon path={mdiShieldAccount} {...props} />;
}

export { mdiShieldAccount as path };
