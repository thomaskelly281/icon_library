import { mdiFolderArrowUpDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderArrowUpDown(props: IconComponentProps) {
  return <Icon path={mdiFolderArrowUpDown} {...props} />;
}

export { mdiFolderArrowUpDown as path };
