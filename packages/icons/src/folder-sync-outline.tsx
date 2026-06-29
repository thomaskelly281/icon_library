import { mdiFolderSyncOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderSyncOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderSyncOutline} {...props} />;
}

export { mdiFolderSyncOutline as path };
