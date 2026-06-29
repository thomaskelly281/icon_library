import { mdiFolderOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderOpen(props: IconComponentProps) {
  return <Icon path={mdiFolderOpen} {...props} />;
}

export { mdiFolderOpen as path };
