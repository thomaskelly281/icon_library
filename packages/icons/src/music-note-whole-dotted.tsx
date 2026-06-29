import { mdiMusicNoteWholeDotted } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MusicNoteWholeDotted(props: IconComponentProps) {
  return <Icon path={mdiMusicNoteWholeDotted} {...props} />;
}

export { mdiMusicNoteWholeDotted as path };
