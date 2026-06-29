import { mdiKeyboardF11 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyboardF11(props: IconComponentProps) {
  return <Icon path={mdiKeyboardF11} {...props} />;
}

export { mdiKeyboardF11 as path };
