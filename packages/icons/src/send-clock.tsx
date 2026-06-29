import { mdiSendClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SendClock(props: IconComponentProps) {
  return <Icon path={mdiSendClock} {...props} />;
}

export { mdiSendClock as path };
