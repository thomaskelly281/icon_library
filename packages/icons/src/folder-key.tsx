import { mdiFolderKey } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderKey(props: IconComponentProps) {
  return <Icon path={mdiFolderKey} {...props} />;
}

export { mdiFolderKey as path };
