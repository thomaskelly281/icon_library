import { mdiFolderSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderSearch(props: IconComponentProps) {
  return <Icon path={mdiFolderSearch} {...props} />;
}

export { mdiFolderSearch as path };
