import { mdiCashMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CashMultiple(props: IconComponentProps) {
  return <Icon path={mdiCashMultiple} {...props} />;
}

export { mdiCashMultiple as path };
