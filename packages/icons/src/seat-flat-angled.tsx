import { mdiSeatFlatAngled } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SeatFlatAngled(props: IconComponentProps) {
  return <Icon path={mdiSeatFlatAngled} {...props} />;
}

export { mdiSeatFlatAngled as path };
