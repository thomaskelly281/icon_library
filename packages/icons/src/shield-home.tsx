import { mdiShieldHome } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldHome(props: IconComponentProps) {
  return <Icon path={mdiShieldHome} {...props} />;
}

export { mdiShieldHome as path };
