import { mdiKeyboardF1 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyboardF1(props: IconComponentProps) {
  return <Icon path={mdiKeyboardF1} {...props} />;
}

export { mdiKeyboardF1 as path };
