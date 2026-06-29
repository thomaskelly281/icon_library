import { mdiFolderSync } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderSync(props: IconComponentProps) {
  return <Icon path={mdiFolderSync} {...props} />;
}

export { mdiFolderSync as path };
