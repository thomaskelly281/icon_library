import { mdiMusicAccidentalFlat } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MusicAccidentalFlat(props: IconComponentProps) {
  return <Icon path={mdiMusicAccidentalFlat} {...props} />;
}

export { mdiMusicAccidentalFlat as path };
