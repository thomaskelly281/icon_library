import { mdiTruckFastOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TruckFastOutline(props: IconComponentProps) {
  return <Icon path={mdiTruckFastOutline} {...props} />;
}

export { mdiTruckFastOutline as path };
