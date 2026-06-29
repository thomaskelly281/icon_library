import { mdiMusicBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MusicBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiMusicBoxOutline} {...props} />;
}

export { mdiMusicBoxOutline as path };
