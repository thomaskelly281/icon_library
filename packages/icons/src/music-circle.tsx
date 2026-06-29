import { mdiMusicCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MusicCircle(props: IconComponentProps) {
  return <Icon path={mdiMusicCircle} {...props} />;
}

export { mdiMusicCircle as path };
