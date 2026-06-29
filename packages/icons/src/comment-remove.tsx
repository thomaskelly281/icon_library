import { mdiCommentRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentRemove(props: IconComponentProps) {
  return <Icon path={mdiCommentRemove} {...props} />;
}

export { mdiCommentRemove as path };
