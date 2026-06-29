import { mdiRollerShade } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RollerShade(props: IconComponentProps) {
  return <Icon path={mdiRollerShade} {...props} />;
}

export { mdiRollerShade as path };
