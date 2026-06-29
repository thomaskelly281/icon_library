import { mdiFolderText } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderText(props: IconComponentProps) {
  return <Icon path={mdiFolderText} {...props} />;
}

export { mdiFolderText as path };
