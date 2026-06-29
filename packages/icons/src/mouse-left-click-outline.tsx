import { mdiMouseLeftClickOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MouseLeftClickOutline(props: IconComponentProps) {
  return <Icon path={mdiMouseLeftClickOutline} {...props} />;
}

export { mdiMouseLeftClickOutline as path };
