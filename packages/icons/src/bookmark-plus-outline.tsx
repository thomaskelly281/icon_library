import { mdiBookmarkPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookmarkPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiBookmarkPlusOutline} {...props} />;
}

export { mdiBookmarkPlusOutline as path };
