import { mdiTruckRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TruckRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiTruckRemoveOutline} {...props} />;
}

export { mdiTruckRemoveOutline as path };
