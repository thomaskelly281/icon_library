import { mdiCashOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CashOff(props: IconComponentProps) {
  return <Icon path={mdiCashOff} {...props} />;
}

export { mdiCashOff as path };
