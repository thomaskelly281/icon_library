import { mdiCommentQuoteOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentQuoteOutline(props: IconComponentProps) {
  return <Icon path={mdiCommentQuoteOutline} {...props} />;
}

export { mdiCommentQuoteOutline as path };
