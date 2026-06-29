import { mdiFolderMultipleImage } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderMultipleImage(props: IconComponentProps) {
  return <Icon path={mdiFolderMultipleImage} {...props} />;
}

export { mdiFolderMultipleImage as path };
