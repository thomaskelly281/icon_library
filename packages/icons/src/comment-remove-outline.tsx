import { mdiCommentRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiCommentRemoveOutline} {...props} />;
}

export { mdiCommentRemoveOutline as path };
