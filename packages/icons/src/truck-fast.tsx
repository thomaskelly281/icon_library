import { mdiTruckFast } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TruckFast(props: IconComponentProps) {
  return <Icon path={mdiTruckFast} {...props} />;
}

export { mdiTruckFast as path };
