import { mdiReplyCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReplyCircle(props: IconComponentProps) {
  return <Icon path={mdiReplyCircle} {...props} />;
}

export { mdiReplyCircle as path };
