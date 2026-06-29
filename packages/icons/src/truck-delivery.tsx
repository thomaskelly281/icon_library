import { mdiTruckDelivery } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TruckDelivery(props: IconComponentProps) {
  return <Icon path={mdiTruckDelivery} {...props} />;
}

export { mdiTruckDelivery as path };
