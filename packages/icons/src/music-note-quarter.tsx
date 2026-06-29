import { mdiMusicNoteQuarter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MusicNoteQuarter(props: IconComponentProps) {
  return <Icon path={mdiMusicNoteQuarter} {...props} />;
}

export { mdiMusicNoteQuarter as path };
