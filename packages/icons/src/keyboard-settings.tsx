import { mdiKeyboardSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyboardSettings(props: IconComponentProps) {
  return <Icon path={mdiKeyboardSettings} {...props} />;
}

export { mdiKeyboardSettings as path };
