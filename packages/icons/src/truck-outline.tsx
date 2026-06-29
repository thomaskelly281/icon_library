import { mdiTruckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TruckOutline(props: IconComponentProps) {
  return <Icon path={mdiTruckOutline} {...props} />;
}

export { mdiTruckOutline as path };
