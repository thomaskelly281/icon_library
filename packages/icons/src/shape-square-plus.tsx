import { mdiShapeSquarePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShapeSquarePlus(props: IconComponentProps) {
  return <Icon path={mdiShapeSquarePlus} {...props} />;
}

export { mdiShapeSquarePlus as path };
