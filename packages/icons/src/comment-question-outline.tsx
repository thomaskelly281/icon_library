import { mdiCommentQuestionOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentQuestionOutline(props: IconComponentProps) {
  return <Icon path={mdiCommentQuestionOutline} {...props} />;
}

export { mdiCommentQuestionOutline as path };
