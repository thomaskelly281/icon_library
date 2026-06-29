import { mdiCommentEyeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentEyeOutline(props: IconComponentProps) {
  return <Icon path={mdiCommentEyeOutline} {...props} />;
}

export { mdiCommentEyeOutline as path };
