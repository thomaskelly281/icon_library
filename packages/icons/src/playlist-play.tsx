import { mdiPlaylistPlay } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlaylistPlay(props: IconComponentProps) {
  return <Icon path={mdiPlaylistPlay} {...props} />;
}

export { mdiPlaylistPlay as path };
