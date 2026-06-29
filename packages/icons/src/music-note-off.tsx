import { mdiMusicNoteOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MusicNoteOff(props: IconComponentProps) {
  return <Icon path={mdiMusicNoteOff} {...props} />;
}

export { mdiMusicNoteOff as path };
