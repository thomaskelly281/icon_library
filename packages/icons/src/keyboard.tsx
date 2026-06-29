import { mdiKeyboard } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Keyboard(props: IconComponentProps) {
  return <Icon path={mdiKeyboard} {...props} />;
}

export { mdiKeyboard as path };
