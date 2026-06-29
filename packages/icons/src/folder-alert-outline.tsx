import { mdiFolderAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderAlertOutline} {...props} />;
}

export { mdiFolderAlertOutline as path };
