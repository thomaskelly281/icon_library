import { mdiMouseRightClick } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MouseRightClick(props: IconComponentProps) {
  return <Icon path={mdiMouseRightClick} {...props} />;
}

export { mdiMouseRightClick as path };
