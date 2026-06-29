import { mdiSpotify } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Spotify(props: IconComponentProps) {
  return <Icon path={mdiSpotify} {...props} />;
}

export { mdiSpotify as path };
