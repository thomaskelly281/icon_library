import { mdiFolderMusicOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderMusicOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderMusicOutline} {...props} />;
}

export { mdiFolderMusicOutline as path };
