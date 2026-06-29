import { mdiBookmarkMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookmarkMultiple(props: IconComponentProps) {
  return <Icon path={mdiBookmarkMultiple} {...props} />;
}

export { mdiBookmarkMultiple as path };
