import { mdiCommentAccount } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentAccount(props: IconComponentProps) {
  return <Icon path={mdiCommentAccount} {...props} />;
}

export { mdiCommentAccount as path };
