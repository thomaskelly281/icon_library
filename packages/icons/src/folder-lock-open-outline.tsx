import { mdiFolderLockOpenOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderLockOpenOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderLockOpenOutline} {...props} />;
}

export { mdiFolderLockOpenOutline as path };
