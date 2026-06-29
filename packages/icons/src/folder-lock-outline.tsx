import { mdiFolderLockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderLockOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderLockOutline} {...props} />;
}

export { mdiFolderLockOutline as path };
