import { mdiMessageTextClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageTextClock(props: IconComponentProps) {
  return <Icon path={mdiMessageTextClock} {...props} />;
}

export { mdiMessageTextClock as path };
