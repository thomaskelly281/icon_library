import { mdiHomeClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeClock(props: IconComponentProps) {
  return <Icon path={mdiHomeClock} {...props} />;
}

export { mdiHomeClock as path };
