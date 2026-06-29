import { mdiBookmarkRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookmarkRemove(props: IconComponentProps) {
  return <Icon path={mdiBookmarkRemove} {...props} />;
}

export { mdiBookmarkRemove as path };
