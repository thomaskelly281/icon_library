import { mdiFolderPlayOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderPlayOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderPlayOutline} {...props} />;
}

export { mdiFolderPlayOutline as path };
