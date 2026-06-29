import { mdiFolderMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderMultipleOutline} {...props} />;
}

export { mdiFolderMultipleOutline as path };
