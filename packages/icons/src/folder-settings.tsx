import { mdiFolderSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderSettings(props: IconComponentProps) {
  return <Icon path={mdiFolderSettings} {...props} />;
}

export { mdiFolderSettings as path };
