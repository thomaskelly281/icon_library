import { mdiKeyboardOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyboardOutline(props: IconComponentProps) {
  return <Icon path={mdiKeyboardOutline} {...props} />;
}

export { mdiKeyboardOutline as path };
