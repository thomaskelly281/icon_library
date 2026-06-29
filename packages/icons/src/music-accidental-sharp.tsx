import { mdiMusicAccidentalSharp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MusicAccidentalSharp(props: IconComponentProps) {
  return <Icon path={mdiMusicAccidentalSharp} {...props} />;
}

export { mdiMusicAccidentalSharp as path };
