import { mdiFolderLockOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderLockOpen(props: IconComponentProps) {
  return <Icon path={mdiFolderLockOpen} {...props} />;
}

export { mdiFolderLockOpen as path };
