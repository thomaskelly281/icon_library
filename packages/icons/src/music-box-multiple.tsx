import { mdiMusicBoxMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MusicBoxMultiple(props: IconComponentProps) {
  return <Icon path={mdiMusicBoxMultiple} {...props} />;
}

export { mdiMusicBoxMultiple as path };
