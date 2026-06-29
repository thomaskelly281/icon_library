import { mdiShapeCirclePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShapeCirclePlus(props: IconComponentProps) {
  return <Icon path={mdiShapeCirclePlus} {...props} />;
}

export { mdiShapeCirclePlus as path };
