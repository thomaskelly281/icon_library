import { mdiCommentSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentSearch(props: IconComponentProps) {
  return <Icon path={mdiCommentSearch} {...props} />;
}

export { mdiCommentSearch as path };
