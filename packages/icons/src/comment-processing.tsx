import { mdiCommentProcessing } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentProcessing(props: IconComponentProps) {
  return <Icon path={mdiCommentProcessing} {...props} />;
}

export { mdiCommentProcessing as path };
