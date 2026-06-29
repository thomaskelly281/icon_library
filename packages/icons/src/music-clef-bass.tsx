import { mdiMusicClefBass } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MusicClefBass(props: IconComponentProps) {
  return <Icon path={mdiMusicClefBass} {...props} />;
}

export { mdiMusicClefBass as path };
