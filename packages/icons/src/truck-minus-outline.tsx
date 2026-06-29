import { mdiTruckMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TruckMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiTruckMinusOutline} {...props} />;
}

export { mdiTruckMinusOutline as path };
