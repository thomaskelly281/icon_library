import { mdiShieldMoon } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldMoon(props: IconComponentProps) {
  return <Icon path={mdiShieldMoon} {...props} />;
}

export { mdiShieldMoon as path };
