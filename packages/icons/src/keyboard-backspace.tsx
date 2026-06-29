import { mdiKeyboardBackspace } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyboardBackspace(props: IconComponentProps) {
  return <Icon path={mdiKeyboardBackspace} {...props} />;
}

export { mdiKeyboardBackspace as path };
