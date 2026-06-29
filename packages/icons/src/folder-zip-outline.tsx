import { mdiFolderZipOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderZipOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderZipOutline} {...props} />;
}

export { mdiFolderZipOutline as path };
