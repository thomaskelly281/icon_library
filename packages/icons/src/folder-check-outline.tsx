import { mdiFolderCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderCheckOutline} {...props} />;
}

export { mdiFolderCheckOutline as path };
