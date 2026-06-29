import { mdiFolderOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderOff(props: IconComponentProps) {
  return <Icon path={mdiFolderOff} {...props} />;
}

export { mdiFolderOff as path };
