import { mdiCarSeat } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarSeat(props: IconComponentProps) {
  return <Icon path={mdiCarSeat} {...props} />;
}

export { mdiCarSeat as path };
