import { mdiFolderPlay } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderPlay(props: IconComponentProps) {
  return <Icon path={mdiFolderPlay} {...props} />;
}

export { mdiFolderPlay as path };
