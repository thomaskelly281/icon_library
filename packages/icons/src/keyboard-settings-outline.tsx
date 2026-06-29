import { mdiKeyboardSettingsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyboardSettingsOutline(props: IconComponentProps) {
  return <Icon path={mdiKeyboardSettingsOutline} {...props} />;
}

export { mdiKeyboardSettingsOutline as path };
