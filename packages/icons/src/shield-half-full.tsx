import { mdiShieldHalfFull } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldHalfFull(props: IconComponentProps) {
  return <Icon path={mdiShieldHalfFull} {...props} />;
}

export { mdiShieldHalfFull as path };
