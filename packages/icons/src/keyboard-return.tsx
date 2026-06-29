import { mdiKeyboardReturn } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyboardReturn(props: IconComponentProps) {
  return <Icon path={mdiKeyboardReturn} {...props} />;
}

export { mdiKeyboardReturn as path };
