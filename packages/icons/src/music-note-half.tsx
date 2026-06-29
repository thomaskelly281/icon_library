import { mdiMusicNoteHalf } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MusicNoteHalf(props: IconComponentProps) {
  return <Icon path={mdiMusicNoteHalf} {...props} />;
}

export { mdiMusicNoteHalf as path };
