import { mdiCylinderOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CylinderOff(props: IconComponentProps) {
  return <Icon path={mdiCylinderOff} {...props} />;
}

export { mdiCylinderOff as path };
