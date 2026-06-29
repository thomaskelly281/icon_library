import { mdiFolderSwap } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderSwap(props: IconComponentProps) {
  return <Icon path={mdiFolderSwap} {...props} />;
}

export { mdiFolderSwap as path };
