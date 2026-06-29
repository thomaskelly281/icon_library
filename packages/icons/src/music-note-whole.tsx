import { mdiMusicNoteWhole } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MusicNoteWhole(props: IconComponentProps) {
  return <Icon path={mdiMusicNoteWhole} {...props} />;
}

export { mdiMusicNoteWhole as path };
