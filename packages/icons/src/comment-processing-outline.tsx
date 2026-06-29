import { mdiCommentProcessingOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentProcessingOutline(props: IconComponentProps) {
  return <Icon path={mdiCommentProcessingOutline} {...props} />;
}

export { mdiCommentProcessingOutline as path };
