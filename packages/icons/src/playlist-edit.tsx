import { mdiPlaylistEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlaylistEdit(props: IconComponentProps) {
  return <Icon path={mdiPlaylistEdit} {...props} />;
}

export { mdiPlaylistEdit as path };
