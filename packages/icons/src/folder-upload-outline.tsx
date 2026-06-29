import { mdiFolderUploadOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderUploadOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderUploadOutline} {...props} />;
}

export { mdiFolderUploadOutline as path };
