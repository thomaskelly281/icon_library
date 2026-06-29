import { mdiFolderMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderMultiple(props: IconComponentProps) {
  return <Icon path={mdiFolderMultiple} {...props} />;
}

export { mdiFolderMultiple as path };
