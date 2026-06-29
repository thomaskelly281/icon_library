import { mdiPlaylistStar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlaylistStar(props: IconComponentProps) {
  return <Icon path={mdiPlaylistStar} {...props} />;
}

export { mdiPlaylistStar as path };
