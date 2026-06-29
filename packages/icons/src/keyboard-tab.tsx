import { mdiKeyboardTab } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyboardTab(props: IconComponentProps) {
  return <Icon path={mdiKeyboardTab} {...props} />;
}

export { mdiKeyboardTab as path };
