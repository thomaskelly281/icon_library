import { mdiFolderCancelOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderCancelOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderCancelOutline} {...props} />;
}

export { mdiFolderCancelOutline as path };
