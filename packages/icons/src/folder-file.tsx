import { mdiFolderFile } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderFile(props: IconComponentProps) {
  return <Icon path={mdiFolderFile} {...props} />;
}

export { mdiFolderFile as path };
