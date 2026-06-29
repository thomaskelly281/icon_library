import { mdiShieldHalf } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldHalf(props: IconComponentProps) {
  return <Icon path={mdiShieldHalf} {...props} />;
}

export { mdiShieldHalf as path };
