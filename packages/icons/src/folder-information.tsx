import { mdiFolderInformation } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderInformation(props: IconComponentProps) {
  return <Icon path={mdiFolderInformation} {...props} />;
}

export { mdiFolderInformation as path };
