import { mdiBookmarkBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookmarkBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiBookmarkBoxOutline} {...props} />;
}

export { mdiBookmarkBoxOutline as path };
