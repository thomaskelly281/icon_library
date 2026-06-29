import { mdiShieldAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldAlert(props: IconComponentProps) {
  return <Icon path={mdiShieldAlert} {...props} />;
}

export { mdiShieldAlert as path };
