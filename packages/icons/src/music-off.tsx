import { mdiMusicOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MusicOff(props: IconComponentProps) {
  return <Icon path={mdiMusicOff} {...props} />;
}

export { mdiMusicOff as path };
