import { mdiCommentArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentArrowRight(props: IconComponentProps) {
  return <Icon path={mdiCommentArrowRight} {...props} />;
}

export { mdiCommentArrowRight as path };
