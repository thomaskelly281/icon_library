import { mdiTruckPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TruckPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiTruckPlusOutline} {...props} />;
}

export { mdiTruckPlusOutline as path };
