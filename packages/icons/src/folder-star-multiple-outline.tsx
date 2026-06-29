import { mdiFolderStarMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderStarMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderStarMultipleOutline} {...props} />;
}

export { mdiFolderStarMultipleOutline as path };
