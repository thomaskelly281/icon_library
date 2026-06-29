import { mdiFolderMoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderMoveOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderMoveOutline} {...props} />;
}

export { mdiFolderMoveOutline as path };
