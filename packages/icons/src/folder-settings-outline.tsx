import { mdiFolderSettingsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderSettingsOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderSettingsOutline} {...props} />;
}

export { mdiFolderSettingsOutline as path };
