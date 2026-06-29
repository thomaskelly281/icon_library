import { mdiCarSeatCooler } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarSeatCooler(props: IconComponentProps) {
  return <Icon path={mdiCarSeatCooler} {...props} />;
}

export { mdiCarSeatCooler as path };
