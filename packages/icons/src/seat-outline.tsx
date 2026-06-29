import { mdiSeatOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SeatOutline(props: IconComponentProps) {
  return <Icon path={mdiSeatOutline} {...props} />;
}

export { mdiSeatOutline as path };
