import { mdiReplyOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReplyOutline(props: IconComponentProps) {
  return <Icon path={mdiReplyOutline} {...props} />;
}

export { mdiReplyOutline as path };
