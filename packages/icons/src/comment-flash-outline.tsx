import { mdiCommentFlashOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentFlashOutline(props: IconComponentProps) {
  return <Icon path={mdiCommentFlashOutline} {...props} />;
}

export { mdiCommentFlashOutline as path };
