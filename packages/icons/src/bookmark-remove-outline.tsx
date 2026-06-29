import { mdiBookmarkRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookmarkRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiBookmarkRemoveOutline} {...props} />;
}

export { mdiBookmarkRemoveOutline as path };
