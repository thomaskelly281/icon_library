import { mdiFolderRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderRemove(props: IconComponentProps) {
  return <Icon path={mdiFolderRemove} {...props} />;
}

export { mdiFolderRemove as path };
