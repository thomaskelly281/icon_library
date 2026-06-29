import { mdiKeyboardF12 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyboardF12(props: IconComponentProps) {
  return <Icon path={mdiKeyboardF12} {...props} />;
}

export { mdiKeyboardF12 as path };
