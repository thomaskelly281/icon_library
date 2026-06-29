import { mdiMouseRightClickOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MouseRightClickOutline(props: IconComponentProps) {
  return <Icon path={mdiMouseRightClickOutline} {...props} />;
}

export { mdiMouseRightClickOutline as path };
