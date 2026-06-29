import { mdiCommentText } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentText(props: IconComponentProps) {
  return <Icon path={mdiCommentText} {...props} />;
}

export { mdiCommentText as path };
