import { mdiTruck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Truck(props: IconComponentProps) {
  return <Icon path={mdiTruck} {...props} />;
}

export { mdiTruck as path };
