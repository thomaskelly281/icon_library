import { mdiKeyboardEsc } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyboardEsc(props: IconComponentProps) {
  return <Icon path={mdiKeyboardEsc} {...props} />;
}

export { mdiKeyboardEsc as path };
