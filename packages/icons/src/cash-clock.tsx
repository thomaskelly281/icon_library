import { mdiCashClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CashClock(props: IconComponentProps) {
  return <Icon path={mdiCashClock} {...props} />;
}

export { mdiCashClock as path };
