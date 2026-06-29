import { mdiBookmarkMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookmarkMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiBookmarkMinusOutline} {...props} />;
}

export { mdiBookmarkMinusOutline as path };
