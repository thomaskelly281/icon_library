import { mdiCommentMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiCommentMultipleOutline} {...props} />;
}

export { mdiCommentMultipleOutline as path };
