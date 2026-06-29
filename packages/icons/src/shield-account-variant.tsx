import { mdiShieldAccountVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldAccountVariant(props: IconComponentProps) {
  return <Icon path={mdiShieldAccountVariant} {...props} />;
}

export { mdiShieldAccountVariant as path };
