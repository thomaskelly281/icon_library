import { mdiBookmarkOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookmarkOutline(props: IconComponentProps) {
  return <Icon path={mdiBookmarkOutline} {...props} />;
}

export { mdiBookmarkOutline as path };
