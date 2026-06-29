import { mdiFolderEye } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderEye(props: IconComponentProps) {
  return <Icon path={mdiFolderEye} {...props} />;
}

export { mdiFolderEye as path };
