import { mdiPlaylistCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlaylistCheck(props: IconComponentProps) {
  return <Icon path={mdiPlaylistCheck} {...props} />;
}

export { mdiPlaylistCheck as path };
