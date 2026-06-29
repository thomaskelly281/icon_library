import { mdiCommentArrowLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentArrowLeft(props: IconComponentProps) {
  return <Icon path={mdiCommentArrowLeft} {...props} />;
}

export { mdiCommentArrowLeft as path };
