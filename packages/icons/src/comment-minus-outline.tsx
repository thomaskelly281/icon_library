import { mdiCommentMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiCommentMinusOutline} {...props} />;
}

export { mdiCommentMinusOutline as path };
