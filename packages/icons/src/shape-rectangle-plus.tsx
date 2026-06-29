import { mdiShapeRectanglePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShapeRectanglePlus(props: IconComponentProps) {
  return <Icon path={mdiShapeRectanglePlus} {...props} />;
}

export { mdiShapeRectanglePlus as path };
