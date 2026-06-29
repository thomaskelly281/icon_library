import { mdiFolderFileOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderFileOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderFileOutline} {...props} />;
}

export { mdiFolderFileOutline as path };
