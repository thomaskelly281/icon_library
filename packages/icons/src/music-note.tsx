import { mdiMusicNote } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MusicNote(props: IconComponentProps) {
  return <Icon path={mdiMusicNote} {...props} />;
}

export { mdiMusicNote as path };
