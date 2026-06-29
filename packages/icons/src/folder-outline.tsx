import { mdiFolderOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderOutline} {...props} />;
}

export { mdiFolderOutline as path };
