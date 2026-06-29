import { mdiStoreClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StoreClock(props: IconComponentProps) {
  return <Icon path={mdiStoreClock} {...props} />;
}

export { mdiStoreClock as path };
