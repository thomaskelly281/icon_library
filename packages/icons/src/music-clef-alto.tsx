import { mdiMusicClefAlto } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MusicClefAlto(props: IconComponentProps) {
  return <Icon path={mdiMusicClefAlto} {...props} />;
}

export { mdiMusicClefAlto as path };
