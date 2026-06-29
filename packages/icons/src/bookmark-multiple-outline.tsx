import { mdiBookmarkMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookmarkMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiBookmarkMultipleOutline} {...props} />;
}

export { mdiBookmarkMultipleOutline as path };
