import { mdiSeatPassenger } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SeatPassenger(props: IconComponentProps) {
  return <Icon path={mdiSeatPassenger} {...props} />;
}

export { mdiSeatPassenger as path };
