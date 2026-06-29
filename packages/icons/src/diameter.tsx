import { mdiDiameter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Diameter(props: IconComponentProps) {
  return <Icon path={mdiDiameter} {...props} />;
}

export { mdiDiameter as path };
