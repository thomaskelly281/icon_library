import { mdiShieldCross } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldCross(props: IconComponentProps) {
  return <Icon path={mdiShieldCross} {...props} />;
}

export { mdiShieldCross as path };
