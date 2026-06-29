import { mdiCommentPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentPlus(props: IconComponentProps) {
  return <Icon path={mdiCommentPlus} {...props} />;
}

export { mdiCommentPlus as path };
