import { mdiShieldSun } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldSun(props: IconComponentProps) {
  return <Icon path={mdiShieldSun} {...props} />;
}

export { mdiShieldSun as path };
