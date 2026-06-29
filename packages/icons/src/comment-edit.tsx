import { mdiCommentEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentEdit(props: IconComponentProps) {
  return <Icon path={mdiCommentEdit} {...props} />;
}

export { mdiCommentEdit as path };
