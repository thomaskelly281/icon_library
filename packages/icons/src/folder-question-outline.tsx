import { mdiFolderQuestionOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderQuestionOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderQuestionOutline} {...props} />;
}

export { mdiFolderQuestionOutline as path };
