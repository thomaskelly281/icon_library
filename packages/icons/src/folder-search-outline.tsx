import { mdiFolderSearchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderSearchOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderSearchOutline} {...props} />;
}

export { mdiFolderSearchOutline as path };
