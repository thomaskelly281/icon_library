import { mdiShapePolygonPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShapePolygonPlus(props: IconComponentProps) {
  return <Icon path={mdiShapePolygonPlus} {...props} />;
}

export { mdiShapePolygonPlus as path };
