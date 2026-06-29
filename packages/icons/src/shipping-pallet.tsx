import { mdiShippingPallet } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShippingPallet(props: IconComponentProps) {
  return <Icon path={mdiShippingPallet} {...props} />;
}

export { mdiShippingPallet as path };
