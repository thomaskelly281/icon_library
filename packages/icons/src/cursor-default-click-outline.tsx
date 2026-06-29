import { mdiCursorDefaultClickOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CursorDefaultClickOutline(props: IconComponentProps) {
  return <Icon path={mdiCursorDefaultClickOutline} {...props} />;
}

export { mdiCursorDefaultClickOutline as path };
