import { mdiFolderArrowUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderArrowUp(props: IconComponentProps) {
  return <Icon path={mdiFolderArrowUp} {...props} />;
}

export { mdiFolderArrowUp as path };
