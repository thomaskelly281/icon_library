import { mdiFolderSwapOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderSwapOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderSwapOutline} {...props} />;
}

export { mdiFolderSwapOutline as path };
