import { mdiBookmarkOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookmarkOffOutline(props: IconComponentProps) {
  return <Icon path={mdiBookmarkOffOutline} {...props} />;
}

export { mdiBookmarkOffOutline as path };
