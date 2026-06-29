import { mdiShieldCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldCheck(props: IconComponentProps) {
  return <Icon path={mdiShieldCheck} {...props} />;
}

export { mdiShieldCheck as path };
