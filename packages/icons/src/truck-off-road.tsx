import { mdiTruckOffRoad } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TruckOffRoad(props: IconComponentProps) {
  return <Icon path={mdiTruckOffRoad} {...props} />;
}

export { mdiTruckOffRoad as path };
