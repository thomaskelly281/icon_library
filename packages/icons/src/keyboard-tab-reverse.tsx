import { mdiKeyboardTabReverse } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyboardTabReverse(props: IconComponentProps) {
  return <Icon path={mdiKeyboardTabReverse} {...props} />;
}

export { mdiKeyboardTabReverse as path };
