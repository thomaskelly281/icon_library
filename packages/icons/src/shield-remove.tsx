import { mdiShieldRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldRemove(props: IconComponentProps) {
  return <Icon path={mdiShieldRemove} {...props} />;
}

export { mdiShieldRemove as path };
