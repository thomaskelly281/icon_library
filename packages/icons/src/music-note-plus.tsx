import { mdiMusicNotePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MusicNotePlus(props: IconComponentProps) {
  return <Icon path={mdiMusicNotePlus} {...props} />;
}

export { mdiMusicNotePlus as path };
