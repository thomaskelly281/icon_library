import { mdiFolderInformationOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderInformationOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderInformationOutline} {...props} />;
}

export { mdiFolderInformationOutline as path };
