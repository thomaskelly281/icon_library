import { mdiFolderPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderPlusOutline} {...props} />;
}

export { mdiFolderPlusOutline as path };
