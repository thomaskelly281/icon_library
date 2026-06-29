import { mdiPlaylistMusicOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlaylistMusicOutline(props: IconComponentProps) {
  return <Icon path={mdiPlaylistMusicOutline} {...props} />;
}

export { mdiPlaylistMusicOutline as path };
