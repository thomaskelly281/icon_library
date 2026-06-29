import { mdiFolderPound } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderPound(props: IconComponentProps) {
  return <Icon path={mdiFolderPound} {...props} />;
}

export { mdiFolderPound as path };
