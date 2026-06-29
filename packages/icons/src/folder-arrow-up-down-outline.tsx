import { mdiFolderArrowUpDownOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderArrowUpDownOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderArrowUpDownOutline} {...props} />;
}

export { mdiFolderArrowUpDownOutline as path };
