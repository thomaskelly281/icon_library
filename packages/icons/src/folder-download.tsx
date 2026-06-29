import { mdiFolderDownload } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderDownload(props: IconComponentProps) {
  return <Icon path={mdiFolderDownload} {...props} />;
}

export { mdiFolderDownload as path };
