import { mdiMusicBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MusicBox(props: IconComponentProps) {
  return <Icon path={mdiMusicBox} {...props} />;
}

export { mdiMusicBox as path };
