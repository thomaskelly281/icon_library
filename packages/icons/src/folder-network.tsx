import { mdiFolderNetwork } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderNetwork(props: IconComponentProps) {
  return <Icon path={mdiFolderNetwork} {...props} />;
}

export { mdiFolderNetwork as path };
