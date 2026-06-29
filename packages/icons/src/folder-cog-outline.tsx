import { mdiFolderCogOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderCogOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderCogOutline} {...props} />;
}

export { mdiFolderCogOutline as path };
