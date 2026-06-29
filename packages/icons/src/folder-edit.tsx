import { mdiFolderEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderEdit(props: IconComponentProps) {
  return <Icon path={mdiFolderEdit} {...props} />;
}

export { mdiFolderEdit as path };
