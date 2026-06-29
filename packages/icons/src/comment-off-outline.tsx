import { mdiCommentOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentOffOutline(props: IconComponentProps) {
  return <Icon path={mdiCommentOffOutline} {...props} />;
}

export { mdiCommentOffOutline as path };
