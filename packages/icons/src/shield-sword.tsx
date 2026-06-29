import { mdiShieldSword } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldSword(props: IconComponentProps) {
  return <Icon path={mdiShieldSword} {...props} />;
}

export { mdiShieldSword as path };
