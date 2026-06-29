import { mdiDotsVertical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DotsVertical(props: IconComponentProps) {
  return <Icon path={mdiDotsVertical} {...props} />;
}

export { mdiDotsVertical as path };
