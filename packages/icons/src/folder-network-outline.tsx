import { mdiFolderNetworkOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderNetworkOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderNetworkOutline} {...props} />;
}

export { mdiFolderNetworkOutline as path };
