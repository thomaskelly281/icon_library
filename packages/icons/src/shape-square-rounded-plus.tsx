import { mdiShapeSquareRoundedPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShapeSquareRoundedPlus(props: IconComponentProps) {
  return <Icon path={mdiShapeSquareRoundedPlus} {...props} />;
}

export { mdiShapeSquareRoundedPlus as path };
