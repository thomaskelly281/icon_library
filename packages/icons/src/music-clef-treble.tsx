import { mdiMusicClefTreble } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MusicClefTreble(props: IconComponentProps) {
  return <Icon path={mdiMusicClefTreble} {...props} />;
}

export { mdiMusicClefTreble as path };
