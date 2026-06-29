import { mdiCommentOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentOutline(props: IconComponentProps) {
  return <Icon path={mdiCommentOutline} {...props} />;
}

export { mdiCommentOutline as path };
