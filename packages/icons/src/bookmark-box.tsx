import { mdiBookmarkBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookmarkBox(props: IconComponentProps) {
  return <Icon path={mdiBookmarkBox} {...props} />;
}

export { mdiBookmarkBox as path };
