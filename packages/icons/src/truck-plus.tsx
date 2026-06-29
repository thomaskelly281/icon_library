import { mdiTruckPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TruckPlus(props: IconComponentProps) {
  return <Icon path={mdiTruckPlus} {...props} />;
}

export { mdiTruckPlus as path };
