import { mdiShieldCrown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldCrown(props: IconComponentProps) {
  return <Icon path={mdiShieldCrown} {...props} />;
}

export { mdiShieldCrown as path };
