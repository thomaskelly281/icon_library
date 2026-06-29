import { mdiTruckAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TruckAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiTruckAlertOutline} {...props} />;
}

export { mdiTruckAlertOutline as path };
