import { mdiCashPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CashPlus(props: IconComponentProps) {
  return <Icon path={mdiCashPlus} {...props} />;
}

export { mdiCashPlus as path };
