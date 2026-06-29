import { mdiFolderCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderCheck(props: IconComponentProps) {
  return <Icon path={mdiFolderCheck} {...props} />;
}

export { mdiFolderCheck as path };
