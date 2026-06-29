import { mdiFolderHidden } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderHidden(props: IconComponentProps) {
  return <Icon path={mdiFolderHidden} {...props} />;
}

export { mdiFolderHidden as path };
