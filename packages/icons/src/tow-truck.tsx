import { mdiTowTruck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TowTruck(props: IconComponentProps) {
  return <Icon path={mdiTowTruck} {...props} />;
}

export { mdiTowTruck as path };
