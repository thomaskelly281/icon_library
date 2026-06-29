import { mdiKeyboardSpace } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyboardSpace(props: IconComponentProps) {
  return <Icon path={mdiKeyboardSpace} {...props} />;
}

export { mdiKeyboardSpace as path };
