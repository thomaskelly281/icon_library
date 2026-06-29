import { mdiCashMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CashMinus(props: IconComponentProps) {
  return <Icon path={mdiCashMinus} {...props} />;
}

export { mdiCashMinus as path };
