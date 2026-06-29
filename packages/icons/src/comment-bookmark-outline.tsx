import { mdiCommentBookmarkOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentBookmarkOutline(props: IconComponentProps) {
  return <Icon path={mdiCommentBookmarkOutline} {...props} />;
}

export { mdiCommentBookmarkOutline as path };
