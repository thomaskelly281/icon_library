import { mdiCommentMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentMinus(props: IconComponentProps) {
  return <Icon path={mdiCommentMinus} {...props} />;
}

export { mdiCommentMinus as path };
