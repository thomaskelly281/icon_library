import { mdiKeyboardClose } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyboardClose(props: IconComponentProps) {
  return <Icon path={mdiKeyboardClose} {...props} />;
}

export { mdiKeyboardClose as path };
