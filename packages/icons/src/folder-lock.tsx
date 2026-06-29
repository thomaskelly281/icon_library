import { mdiFolderLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderLock(props: IconComponentProps) {
  return <Icon path={mdiFolderLock} {...props} />;
}

export { mdiFolderLock as path };
