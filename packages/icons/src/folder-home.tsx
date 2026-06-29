import { mdiFolderHome } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderHome(props: IconComponentProps) {
  return <Icon path={mdiFolderHome} {...props} />;
}

export { mdiFolderHome as path };
