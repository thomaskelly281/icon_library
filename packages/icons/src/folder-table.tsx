import { mdiFolderTable } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderTable(props: IconComponentProps) {
  return <Icon path={mdiFolderTable} {...props} />;
}

export { mdiFolderTable as path };
