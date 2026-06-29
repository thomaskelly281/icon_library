import { mdiTriangleSmallUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TriangleSmallUp(props: IconComponentProps) {
  return <Icon path={mdiTriangleSmallUp} {...props} />;
}

export { mdiTriangleSmallUp as path };
