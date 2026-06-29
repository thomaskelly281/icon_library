import { mdiRollerShadeClosed } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RollerShadeClosed(props: IconComponentProps) {
  return <Icon path={mdiRollerShadeClosed} {...props} />;
}

export { mdiRollerShadeClosed as path };
