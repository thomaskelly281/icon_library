import { mdiShieldBug } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldBug(props: IconComponentProps) {
  return <Icon path={mdiShieldBug} {...props} />;
}

export { mdiShieldBug as path };
