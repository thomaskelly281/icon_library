import { mdiBookMusicOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookMusicOutline(props: IconComponentProps) {
  return <Icon path={mdiBookMusicOutline} {...props} />;
}

export { mdiBookMusicOutline as path };
