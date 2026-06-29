import { mdiKeyboardF9 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyboardF9(props: IconComponentProps) {
  return <Icon path={mdiKeyboardF9} {...props} />;
}

export { mdiKeyboardF9 as path };
