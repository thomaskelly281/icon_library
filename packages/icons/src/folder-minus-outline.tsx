import { mdiFolderMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderMinusOutline} {...props} />;
}

export { mdiFolderMinusOutline as path };
