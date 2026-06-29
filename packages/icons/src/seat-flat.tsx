import { mdiSeatFlat } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SeatFlat(props: IconComponentProps) {
  return <Icon path={mdiSeatFlat} {...props} />;
}

export { mdiSeatFlat as path };
