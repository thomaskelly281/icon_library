import { mdiShieldAirplane } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldAirplane(props: IconComponentProps) {
  return <Icon path={mdiShieldAirplane} {...props} />;
}

export { mdiShieldAirplane as path };
