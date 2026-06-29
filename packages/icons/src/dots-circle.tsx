import { mdiDotsCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DotsCircle(props: IconComponentProps) {
  return <Icon path={mdiDotsCircle} {...props} />;
}

export { mdiDotsCircle as path };
