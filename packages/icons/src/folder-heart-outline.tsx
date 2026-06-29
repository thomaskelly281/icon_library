import { mdiFolderHeartOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderHeartOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderHeartOutline} {...props} />;
}

export { mdiFolderHeartOutline as path };
