import { mdiCylinder } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cylinder(props: IconComponentProps) {
  return <Icon path={mdiCylinder} {...props} />;
}

export { mdiCylinder as path };
