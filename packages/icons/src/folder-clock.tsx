import { mdiFolderClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderClock(props: IconComponentProps) {
  return <Icon path={mdiFolderClock} {...props} />;
}

export { mdiFolderClock as path };
