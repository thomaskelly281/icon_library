import { mdiBookmarkCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookmarkCheck(props: IconComponentProps) {
  return <Icon path={mdiBookmarkCheck} {...props} />;
}

export { mdiBookmarkCheck as path };
