import { mdiFolderTableOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderTableOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderTableOutline} {...props} />;
}

export { mdiFolderTableOutline as path };
