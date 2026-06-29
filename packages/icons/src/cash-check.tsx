import { mdiCashCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CashCheck(props: IconComponentProps) {
  return <Icon path={mdiCashCheck} {...props} />;
}

export { mdiCashCheck as path };
