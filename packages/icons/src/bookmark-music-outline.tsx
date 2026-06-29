import { mdiBookmarkMusicOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookmarkMusicOutline(props: IconComponentProps) {
  return <Icon path={mdiBookmarkMusicOutline} {...props} />;
}

export { mdiBookmarkMusicOutline as path };
