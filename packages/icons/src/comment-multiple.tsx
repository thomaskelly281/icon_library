import { mdiCommentMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentMultiple(props: IconComponentProps) {
  return <Icon path={mdiCommentMultiple} {...props} />;
}

export { mdiCommentMultiple as path };
