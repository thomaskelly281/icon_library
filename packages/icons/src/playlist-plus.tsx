import { mdiPlaylistPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlaylistPlus(props: IconComponentProps) {
  return <Icon path={mdiPlaylistPlus} {...props} />;
}

export { mdiPlaylistPlus as path };
