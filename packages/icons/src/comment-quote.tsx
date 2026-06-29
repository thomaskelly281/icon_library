import { mdiCommentQuote } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentQuote(props: IconComponentProps) {
  return <Icon path={mdiCommentQuote} {...props} />;
}

export { mdiCommentQuote as path };
