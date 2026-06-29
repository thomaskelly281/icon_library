import { mdiKeyboardOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyboardOff(props: IconComponentProps) {
  return <Icon path={mdiKeyboardOff} {...props} />;
}

export { mdiKeyboardOff as path };
