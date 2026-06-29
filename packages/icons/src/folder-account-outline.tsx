import { mdiFolderAccountOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderAccountOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderAccountOutline} {...props} />;
}

export { mdiFolderAccountOutline as path };
