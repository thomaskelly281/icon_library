import { mdiKeyboardCloseOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyboardCloseOutline(props: IconComponentProps) {
  return <Icon path={mdiKeyboardCloseOutline} {...props} />;
}

export { mdiKeyboardCloseOutline as path };
