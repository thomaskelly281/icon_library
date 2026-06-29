import { mdiDotsHorizontalCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DotsHorizontalCircle(props: IconComponentProps) {
  return <Icon path={mdiDotsHorizontalCircle} {...props} />;
}

export { mdiDotsHorizontalCircle as path };
