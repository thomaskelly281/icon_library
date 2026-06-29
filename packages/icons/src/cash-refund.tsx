import { mdiCashRefund } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CashRefund(props: IconComponentProps) {
  return <Icon path={mdiCashRefund} {...props} />;
}

export { mdiCashRefund as path };
