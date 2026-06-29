import { mdiShieldOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldOff(props: IconComponentProps) {
  return <Icon path={mdiShieldOff} {...props} />;
}

export { mdiShieldOff as path };
