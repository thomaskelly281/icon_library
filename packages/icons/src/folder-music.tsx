import { mdiFolderMusic } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderMusic(props: IconComponentProps) {
  return <Icon path={mdiFolderMusic} {...props} />;
}

export { mdiFolderMusic as path };
