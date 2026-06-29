import { mdiFolderRefresh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderRefresh(props: IconComponentProps) {
  return <Icon path={mdiFolderRefresh} {...props} />;
}

export { mdiFolderRefresh as path };
