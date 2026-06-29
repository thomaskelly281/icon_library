import { mdiCashRegister } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CashRegister(props: IconComponentProps) {
  return <Icon path={mdiCashRegister} {...props} />;
}

export { mdiCashRegister as path };
