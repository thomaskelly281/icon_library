import { mdiFolderHomeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderHomeOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderHomeOutline} {...props} />;
}

export { mdiFolderHomeOutline as path };
