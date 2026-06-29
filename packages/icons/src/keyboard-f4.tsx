import { mdiKeyboardF4 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyboardF4(props: IconComponentProps) {
  return <Icon path={mdiKeyboardF4} {...props} />;
}

export { mdiKeyboardF4 as path };
