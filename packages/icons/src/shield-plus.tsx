import { mdiShieldPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldPlus(props: IconComponentProps) {
  return <Icon path={mdiShieldPlus} {...props} />;
}

export { mdiShieldPlus as path };
