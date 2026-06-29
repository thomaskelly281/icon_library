import { mdiTruckDeliveryOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TruckDeliveryOutline(props: IconComponentProps) {
  return <Icon path={mdiTruckDeliveryOutline} {...props} />;
}

export { mdiTruckDeliveryOutline as path };
