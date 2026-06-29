import { mdiCashLockOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CashLockOpen(props: IconComponentProps) {
  return <Icon path={mdiCashLockOpen} {...props} />;
}

export { mdiCashLockOpen as path };
