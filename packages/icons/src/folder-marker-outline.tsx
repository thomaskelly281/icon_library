import { mdiFolderMarkerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderMarkerOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderMarkerOutline} {...props} />;
}

export { mdiFolderMarkerOutline as path };
