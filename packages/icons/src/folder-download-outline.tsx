import { mdiFolderDownloadOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderDownloadOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderDownloadOutline} {...props} />;
}

export { mdiFolderDownloadOutline as path };
