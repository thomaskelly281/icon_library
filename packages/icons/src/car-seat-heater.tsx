import { mdiCarSeatHeater } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarSeatHeater(props: IconComponentProps) {
  return <Icon path={mdiCarSeatHeater} {...props} />;
}

export { mdiCarSeatHeater as path };
