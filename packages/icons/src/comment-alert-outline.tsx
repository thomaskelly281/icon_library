import { mdiCommentAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiCommentAlertOutline} {...props} />;
}

export { mdiCommentAlertOutline as path };
