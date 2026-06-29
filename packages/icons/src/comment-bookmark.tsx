import { mdiCommentBookmark } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentBookmark(props: IconComponentProps) {
  return <Icon path={mdiCommentBookmark} {...props} />;
}

export { mdiCommentBookmark as path };
