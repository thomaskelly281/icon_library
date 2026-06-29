import { mdiDotsVerticalCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DotsVerticalCircle(props: IconComponentProps) {
  return <Icon path={mdiDotsVerticalCircle} {...props} />;
}

export { mdiDotsVerticalCircle as path };
