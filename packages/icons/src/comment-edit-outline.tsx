import { mdiCommentEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentEditOutline(props: IconComponentProps) {
  return <Icon path={mdiCommentEditOutline} {...props} />;
}

export { mdiCommentEditOutline as path };
