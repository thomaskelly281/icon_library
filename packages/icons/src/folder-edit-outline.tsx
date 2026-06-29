import { mdiFolderEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderEditOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderEditOutline} {...props} />;
}

export { mdiFolderEditOutline as path };
