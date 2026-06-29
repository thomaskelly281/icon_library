import { mdiFolderAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderAlert(props: IconComponentProps) {
  return <Icon path={mdiFolderAlert} {...props} />;
}

export { mdiFolderAlert as path };
