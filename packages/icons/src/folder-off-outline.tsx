import { mdiFolderOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderOffOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderOffOutline} {...props} />;
}

export { mdiFolderOffOutline as path };
