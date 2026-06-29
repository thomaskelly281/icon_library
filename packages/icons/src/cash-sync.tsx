import { mdiCashSync } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CashSync(props: IconComponentProps) {
  return <Icon path={mdiCashSync} {...props} />;
}

export { mdiCashSync as path };
