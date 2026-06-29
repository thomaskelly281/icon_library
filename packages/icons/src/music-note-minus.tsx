import { mdiMusicNoteMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MusicNoteMinus(props: IconComponentProps) {
  return <Icon path={mdiMusicNoteMinus} {...props} />;
}

export { mdiMusicNoteMinus as path };
