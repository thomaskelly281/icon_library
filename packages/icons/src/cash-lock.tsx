import { mdiCashLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CashLock(props: IconComponentProps) {
  return <Icon path={mdiCashLock} {...props} />;
}

export { mdiCashLock as path };
