import { mdiFolderArrowDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderArrowDown(props: IconComponentProps) {
  return <Icon path={mdiFolderArrowDown} {...props} />;
}

export { mdiFolderArrowDown as path };
