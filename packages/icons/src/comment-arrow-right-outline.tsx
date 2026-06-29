import { mdiCommentArrowRightOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentArrowRightOutline(props: IconComponentProps) {
  return <Icon path={mdiCommentArrowRightOutline} {...props} />;
}

export { mdiCommentArrowRightOutline as path };
