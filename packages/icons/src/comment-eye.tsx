import { mdiCommentEye } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentEye(props: IconComponentProps) {
  return <Icon path={mdiCommentEye} {...props} />;
}

export { mdiCommentEye as path };
