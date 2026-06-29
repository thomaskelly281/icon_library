import { mdiFolderTextOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderTextOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderTextOutline} {...props} />;
}

export { mdiFolderTextOutline as path };
