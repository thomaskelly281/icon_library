import { mdiMusicNoteBluetooth } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MusicNoteBluetooth(props: IconComponentProps) {
  return <Icon path={mdiMusicNoteBluetooth} {...props} />;
}

export { mdiMusicNoteBluetooth as path };
