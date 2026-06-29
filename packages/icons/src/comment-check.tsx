import { mdiCommentCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentCheck(props: IconComponentProps) {
  return <Icon path={mdiCommentCheck} {...props} />;
}

export { mdiCommentCheck as path };
