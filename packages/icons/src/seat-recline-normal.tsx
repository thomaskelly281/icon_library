import { mdiSeatReclineNormal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SeatReclineNormal(props: IconComponentProps) {
  return <Icon path={mdiSeatReclineNormal} {...props} />;
}

export { mdiSeatReclineNormal as path };
