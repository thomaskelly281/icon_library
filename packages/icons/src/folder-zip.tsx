import { mdiFolderZip } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderZip(props: IconComponentProps) {
  return <Icon path={mdiFolderZip} {...props} />;
}

export { mdiFolderZip as path };
