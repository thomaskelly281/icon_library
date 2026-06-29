import { mdiQueueFirstInLastOut } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function QueueFirstInLastOut(props: IconComponentProps) {
  return <Icon path={mdiQueueFirstInLastOut} {...props} />;
}

export { mdiQueueFirstInLastOut as path };
