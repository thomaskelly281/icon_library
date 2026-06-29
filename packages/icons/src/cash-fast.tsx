import { mdiCashFast } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CashFast(props: IconComponentProps) {
  return <Icon path={mdiCashFast} {...props} />;
}

export { mdiCashFast as path };
