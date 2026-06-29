import { mdiFolderPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderPlus(props: IconComponentProps) {
  return <Icon path={mdiFolderPlus} {...props} />;
}

export { mdiFolderPlus as path };
