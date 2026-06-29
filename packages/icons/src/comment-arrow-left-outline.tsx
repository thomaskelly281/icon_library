import { mdiCommentArrowLeftOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentArrowLeftOutline(props: IconComponentProps) {
  return <Icon path={mdiCommentArrowLeftOutline} {...props} />;
}

export { mdiCommentArrowLeftOutline as path };
