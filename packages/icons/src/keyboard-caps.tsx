import { mdiKeyboardCaps } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyboardCaps(props: IconComponentProps) {
  return <Icon path={mdiKeyboardCaps} {...props} />;
}

export { mdiKeyboardCaps as path };
