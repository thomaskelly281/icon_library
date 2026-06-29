import { mdiCursorDefaultOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CursorDefaultOutline(props: IconComponentProps) {
  return <Icon path={mdiCursorDefaultOutline} {...props} />;
}

export { mdiCursorDefaultOutline as path };
