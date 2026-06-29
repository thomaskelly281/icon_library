import { mdiKeyboardVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyboardVariant(props: IconComponentProps) {
  return <Icon path={mdiKeyboardVariant} {...props} />;
}

export { mdiKeyboardVariant as path };
