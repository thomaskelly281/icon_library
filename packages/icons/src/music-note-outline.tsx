import { mdiMusicNoteOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MusicNoteOutline(props: IconComponentProps) {
  return <Icon path={mdiMusicNoteOutline} {...props} />;
}

export { mdiMusicNoteOutline as path };
