import { mdiFolderOpenOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderOpenOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderOpenOutline} {...props} />;
}

export { mdiFolderOpenOutline as path };
