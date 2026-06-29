import { mdiTankerTruck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TankerTruck(props: IconComponentProps) {
  return <Icon path={mdiTankerTruck} {...props} />;
}

export { mdiTankerTruck as path };
