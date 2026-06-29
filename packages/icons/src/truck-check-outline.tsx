import { mdiTruckCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TruckCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiTruckCheckOutline} {...props} />;
}

export { mdiTruckCheckOutline as path };
