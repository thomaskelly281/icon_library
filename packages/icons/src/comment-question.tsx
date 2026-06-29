import { mdiCommentQuestion } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentQuestion(props: IconComponentProps) {
  return <Icon path={mdiCommentQuestion} {...props} />;
}

export { mdiCommentQuestion as path };
