import { mdiBookmark } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bookmark(props: IconComponentProps) {
  return <Icon path={mdiBookmark} {...props} />;
}

export { mdiBookmark as path };
