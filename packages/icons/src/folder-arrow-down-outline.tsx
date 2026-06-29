import { mdiFolderArrowDownOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderArrowDownOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderArrowDownOutline} {...props} />;
}

export { mdiFolderArrowDownOutline as path };
