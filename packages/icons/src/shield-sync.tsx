import { mdiShieldSync } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldSync(props: IconComponentProps) {
  return <Icon path={mdiShieldSync} {...props} />;
}

export { mdiShieldSync as path };
