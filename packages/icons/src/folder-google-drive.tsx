import { mdiFolderGoogleDrive } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderGoogleDrive(props: IconComponentProps) {
  return <Icon path={mdiFolderGoogleDrive} {...props} />;
}

export { mdiFolderGoogleDrive as path };
