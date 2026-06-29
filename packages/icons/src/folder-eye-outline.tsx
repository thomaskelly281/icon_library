import { mdiFolderEyeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderEyeOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderEyeOutline} {...props} />;
}

export { mdiFolderEyeOutline as path };
