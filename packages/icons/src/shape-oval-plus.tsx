import { mdiShapeOvalPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShapeOvalPlus(props: IconComponentProps) {
  return <Icon path={mdiShapeOvalPlus} {...props} />;
}

export { mdiShapeOvalPlus as path };
