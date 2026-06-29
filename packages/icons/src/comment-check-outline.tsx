import { mdiCommentCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiCommentCheckOutline} {...props} />;
}

export { mdiCommentCheckOutline as path };
