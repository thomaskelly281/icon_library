import { mdiFanClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FanClock(props: IconComponentProps) {
  return <Icon path={mdiFanClock} {...props} />;
}

export { mdiFanClock as path };
