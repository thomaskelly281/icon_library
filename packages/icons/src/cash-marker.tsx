import { mdiCashMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CashMarker(props: IconComponentProps) {
  return <Icon path={mdiCashMarker} {...props} />;
}

export { mdiCashMarker as path };
