import { mdiCursorDefaultGestureOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CursorDefaultGestureOutline(props: IconComponentProps) {
  return <Icon path={mdiCursorDefaultGestureOutline} {...props} />;
}

export { mdiCursorDefaultGestureOutline as path };
