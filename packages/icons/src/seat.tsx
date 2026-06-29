import { mdiSeat } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Seat(props: IconComponentProps) {
  return <Icon path={mdiSeat} {...props} />;
}

export { mdiSeat as path };
