import { mdiCommentSearchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentSearchOutline(props: IconComponentProps) {
  return <Icon path={mdiCommentSearchOutline} {...props} />;
}

export { mdiCommentSearchOutline as path };
