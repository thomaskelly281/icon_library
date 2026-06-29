import { mdiFolderWrenchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderWrenchOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderWrenchOutline} {...props} />;
}

export { mdiFolderWrenchOutline as path };
