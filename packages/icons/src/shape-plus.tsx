import { mdiShapePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShapePlus(props: IconComponentProps) {
  return <Icon path={mdiShapePlus} {...props} />;
}

export { mdiShapePlus as path };
