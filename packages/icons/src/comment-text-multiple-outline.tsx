import { mdiCommentTextMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentTextMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiCommentTextMultipleOutline} {...props} />;
}

export { mdiCommentTextMultipleOutline as path };
