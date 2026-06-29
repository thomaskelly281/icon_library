import { mdiBellSleep } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BellSleep(props: IconComponentProps) {
  return <Icon path={mdiBellSleep} {...props} />;
}

export { mdiBellSleep as path };
