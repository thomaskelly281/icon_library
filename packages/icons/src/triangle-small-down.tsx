import { mdiTriangleSmallDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TriangleSmallDown(props: IconComponentProps) {
  return <Icon path={mdiTriangleSmallDown} {...props} />;
}

export { mdiTriangleSmallDown as path };
