import { mdiFolderCancel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderCancel(props: IconComponentProps) {
  return <Icon path={mdiFolderCancel} {...props} />;
}

export { mdiFolderCancel as path };
