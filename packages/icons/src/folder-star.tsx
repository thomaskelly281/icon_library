import { mdiFolderStar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderStar(props: IconComponentProps) {
  return <Icon path={mdiFolderStar} {...props} />;
}

export { mdiFolderStar as path };
