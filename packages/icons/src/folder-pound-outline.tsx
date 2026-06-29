import { mdiFolderPoundOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderPoundOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderPoundOutline} {...props} />;
}

export { mdiFolderPoundOutline as path };
