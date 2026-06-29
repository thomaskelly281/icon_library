import { mdiFolderArrowRightOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderArrowRightOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderArrowRightOutline} {...props} />;
}

export { mdiFolderArrowRightOutline as path };
