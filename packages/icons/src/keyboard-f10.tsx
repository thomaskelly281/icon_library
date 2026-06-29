import { mdiKeyboardF10 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyboardF10(props: IconComponentProps) {
  return <Icon path={mdiKeyboardF10} {...props} />;
}

export { mdiKeyboardF10 as path };
