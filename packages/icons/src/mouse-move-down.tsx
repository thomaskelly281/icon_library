import { mdiMouseMoveDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MouseMoveDown(props: IconComponentProps) {
  return <Icon path={mdiMouseMoveDown} {...props} />;
}

export { mdiMouseMoveDown as path };
