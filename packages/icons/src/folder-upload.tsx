import { mdiFolderUpload } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderUpload(props: IconComponentProps) {
  return <Icon path={mdiFolderUpload} {...props} />;
}

export { mdiFolderUpload as path };
