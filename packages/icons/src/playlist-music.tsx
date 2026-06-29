import { mdiPlaylistMusic } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlaylistMusic(props: IconComponentProps) {
  return <Icon path={mdiPlaylistMusic} {...props} />;
}

export { mdiPlaylistMusic as path };
