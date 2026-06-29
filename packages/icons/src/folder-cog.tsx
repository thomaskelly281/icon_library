import { mdiFolderCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderCog(props: IconComponentProps) {
  return <Icon path={mdiFolderCog} {...props} />;
}

export { mdiFolderCog as path };
