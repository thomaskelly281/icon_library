import { mdiFolderStarMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderStarMultiple(props: IconComponentProps) {
  return <Icon path={mdiFolderStarMultiple} {...props} />;
}

export { mdiFolderStarMultiple as path };
