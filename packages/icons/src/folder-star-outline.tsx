import { mdiFolderStarOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderStarOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderStarOutline} {...props} />;
}

export { mdiFolderStarOutline as path };
