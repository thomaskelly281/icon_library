import { mdiBookmarkMusic } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookmarkMusic(props: IconComponentProps) {
  return <Icon path={mdiBookmarkMusic} {...props} />;
}

export { mdiBookmarkMusic as path };
