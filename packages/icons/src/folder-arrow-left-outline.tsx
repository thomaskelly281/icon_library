import { mdiFolderArrowLeftOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderArrowLeftOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderArrowLeftOutline} {...props} />;
}

export { mdiFolderArrowLeftOutline as path };
