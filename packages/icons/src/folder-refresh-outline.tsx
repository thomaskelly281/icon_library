import { mdiFolderRefreshOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderRefreshOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderRefreshOutline} {...props} />;
}

export { mdiFolderRefreshOutline as path };
