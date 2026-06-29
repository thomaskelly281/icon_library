import { mdiCommentAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentAlert(props: IconComponentProps) {
  return <Icon path={mdiCommentAlert} {...props} />;
}

export { mdiCommentAlert as path };
