import { mdiFolderArrowUpOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderArrowUpOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderArrowUpOutline} {...props} />;
}

export { mdiFolderArrowUpOutline as path };
