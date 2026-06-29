import { mdiMusicNoteHalfDotted } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MusicNoteHalfDotted(props: IconComponentProps) {
  return <Icon path={mdiMusicNoteHalfDotted} {...props} />;
}

export { mdiMusicNoteHalfDotted as path };
