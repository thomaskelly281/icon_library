import { mdiDotsHorizontal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DotsHorizontal(props: IconComponentProps) {
  return <Icon path={mdiDotsHorizontal} {...props} />;
}

export { mdiDotsHorizontal as path };
