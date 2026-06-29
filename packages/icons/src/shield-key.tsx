import { mdiShieldKey } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldKey(props: IconComponentProps) {
  return <Icon path={mdiShieldKey} {...props} />;
}

export { mdiShieldKey as path };
