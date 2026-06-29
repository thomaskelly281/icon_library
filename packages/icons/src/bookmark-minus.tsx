import { mdiBookmarkMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookmarkMinus(props: IconComponentProps) {
  return <Icon path={mdiBookmarkMinus} {...props} />;
}

export { mdiBookmarkMinus as path };
