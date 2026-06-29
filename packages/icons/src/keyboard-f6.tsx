import { mdiKeyboardF6 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyboardF6(props: IconComponentProps) {
  return <Icon path={mdiKeyboardF6} {...props} />;
}

export { mdiKeyboardF6 as path };
