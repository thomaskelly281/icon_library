import { mdiBookmarkPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookmarkPlus(props: IconComponentProps) {
  return <Icon path={mdiBookmarkPlus} {...props} />;
}

export { mdiBookmarkPlus as path };
