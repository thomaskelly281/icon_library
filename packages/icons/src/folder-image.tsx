import { mdiFolderImage } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderImage(props: IconComponentProps) {
  return <Icon path={mdiFolderImage} {...props} />;
}

export { mdiFolderImage as path };
