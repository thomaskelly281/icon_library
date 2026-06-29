import { mdiFolderKeyOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderKeyOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderKeyOutline} {...props} />;
}

export { mdiFolderKeyOutline as path };
