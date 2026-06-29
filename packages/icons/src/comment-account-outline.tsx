import { mdiCommentAccountOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommentAccountOutline(props: IconComponentProps) {
  return <Icon path={mdiCommentAccountOutline} {...props} />;
}

export { mdiCommentAccountOutline as path };
