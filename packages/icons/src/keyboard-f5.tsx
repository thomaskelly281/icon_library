import { mdiKeyboardF5 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyboardF5(props: IconComponentProps) {
  return <Icon path={mdiKeyboardF5} {...props} />;
}

export { mdiKeyboardF5 as path };
