import { mdiCommentOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentOff(props: IconComponentProps) {
  return <Icon path={mdiCommentOff} {...props} />;
}

export { mdiCommentOff as path };
