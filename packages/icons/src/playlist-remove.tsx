import { mdiPlaylistRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlaylistRemove(props: IconComponentProps) {
  return <Icon path={mdiPlaylistRemove} {...props} />;
}

export { mdiPlaylistRemove as path };
