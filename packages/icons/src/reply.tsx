import { mdiReply } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Reply(props: IconComponentProps) {
  return <Icon path={mdiReply} {...props} />;
}

export { mdiReply as path };
