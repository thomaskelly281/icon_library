import { mdiCashEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CashEdit(props: IconComponentProps) {
  return <Icon path={mdiCashEdit} {...props} />;
}

export { mdiCashEdit as path };
