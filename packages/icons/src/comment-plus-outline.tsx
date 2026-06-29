import { mdiCommentPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiCommentPlusOutline} {...props} />;
}

export { mdiCommentPlusOutline as path };
