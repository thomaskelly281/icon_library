import { mdiReplyAll } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReplyAll(props: IconComponentProps) {
  return <Icon path={mdiReplyAll} {...props} />;
}

export { mdiReplyAll as path };
