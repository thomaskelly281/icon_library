import { mdiReplyAllOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReplyAllOutline(props: IconComponentProps) {
  return <Icon path={mdiReplyAllOutline} {...props} />;
}

export { mdiReplyAllOutline as path };
