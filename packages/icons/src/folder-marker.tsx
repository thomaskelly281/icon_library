import { mdiFolderMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderMarker(props: IconComponentProps) {
  return <Icon path={mdiFolderMarker} {...props} />;
}

export { mdiFolderMarker as path };
