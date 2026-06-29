import { mdiCommentFlash } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentFlash(props: IconComponentProps) {
  return <Icon path={mdiCommentFlash} {...props} />;
}

export { mdiCommentFlash as path };
