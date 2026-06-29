import { mdiBookmarkCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookmarkCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiBookmarkCheckOutline} {...props} />;
}

export { mdiBookmarkCheckOutline as path };
