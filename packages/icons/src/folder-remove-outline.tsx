import { mdiFolderRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderRemoveOutline} {...props} />;
}

export { mdiFolderRemoveOutline as path };
