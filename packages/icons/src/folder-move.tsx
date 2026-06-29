import { mdiFolderMove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderMove(props: IconComponentProps) {
  return <Icon path={mdiFolderMove} {...props} />;
}

export { mdiFolderMove as path };
