import { mdiFolderMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderMinus(props: IconComponentProps) {
  return <Icon path={mdiFolderMinus} {...props} />;
}

export { mdiFolderMinus as path };
