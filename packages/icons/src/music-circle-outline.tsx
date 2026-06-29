import { mdiMusicCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MusicCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiMusicCircleOutline} {...props} />;
}

export { mdiMusicCircleOutline as path };
