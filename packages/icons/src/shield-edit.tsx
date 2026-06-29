import { mdiShieldEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldEdit(props: IconComponentProps) {
  return <Icon path={mdiShieldEdit} {...props} />;
}

export { mdiShieldEdit as path };
