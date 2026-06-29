import { mdiKeyboardF8 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyboardF8(props: IconComponentProps) {
  return <Icon path={mdiKeyboardF8} {...props} />;
}

export { mdiKeyboardF8 as path };
