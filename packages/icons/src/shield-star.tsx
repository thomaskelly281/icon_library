import { mdiShieldStar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldStar(props: IconComponentProps) {
  return <Icon path={mdiShieldStar} {...props} />;
}

export { mdiShieldStar as path };
