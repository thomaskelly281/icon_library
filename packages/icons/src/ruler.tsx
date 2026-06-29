import { mdiRuler } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ruler(props: IconComponentProps) {
  return <Icon path={mdiRuler} {...props} />;
}

export { mdiRuler as path };
