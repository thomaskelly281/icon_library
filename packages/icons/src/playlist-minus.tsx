import { mdiPlaylistMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlaylistMinus(props: IconComponentProps) {
  return <Icon path={mdiPlaylistMinus} {...props} />;
}

export { mdiPlaylistMinus as path };
