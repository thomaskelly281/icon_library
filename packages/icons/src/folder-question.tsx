import { mdiFolderQuestion } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderQuestion(props: IconComponentProps) {
  return <Icon path={mdiFolderQuestion} {...props} />;
}

export { mdiFolderQuestion as path };
