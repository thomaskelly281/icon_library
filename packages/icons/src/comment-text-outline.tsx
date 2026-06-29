import { mdiCommentTextOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentTextOutline(props: IconComponentProps) {
  return <Icon path={mdiCommentTextOutline} {...props} />;
}

export { mdiCommentTextOutline as path };
