import { mdiTriangleDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TriangleDown(props: IconComponentProps) {
  return <Icon path={mdiTriangleDown} {...props} />;
}

export { mdiTriangleDown as path };
