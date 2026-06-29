import { mdiCashRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CashRemove(props: IconComponentProps) {
  return <Icon path={mdiCashRemove} {...props} />;
}

export { mdiCashRemove as path };
