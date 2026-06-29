import { mdiKeyboardOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyboardOffOutline(props: IconComponentProps) {
  return <Icon path={mdiKeyboardOffOutline} {...props} />;
}

export { mdiKeyboardOffOutline as path };
