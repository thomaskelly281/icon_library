import { mdiCommentTextMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentTextMultiple(props: IconComponentProps) {
  return <Icon path={mdiCommentTextMultiple} {...props} />;
}

export { mdiCommentTextMultiple as path };
