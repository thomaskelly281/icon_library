import { mdiBookmarkBoxMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookmarkBoxMultiple(props: IconComponentProps) {
  return <Icon path={mdiBookmarkBoxMultiple} {...props} />;
}

export { mdiBookmarkBoxMultiple as path };
