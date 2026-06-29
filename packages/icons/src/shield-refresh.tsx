import { mdiShieldRefresh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldRefresh(props: IconComponentProps) {
  return <Icon path={mdiShieldRefresh} {...props} />;
}

export { mdiShieldRefresh as path };
