import { mdiBookmarkOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookmarkOff(props: IconComponentProps) {
  return <Icon path={mdiBookmarkOff} {...props} />;
}

export { mdiBookmarkOff as path };
