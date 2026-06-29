import { mdiCarChildSeat } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarChildSeat(props: IconComponentProps) {
  return <Icon path={mdiCarChildSeat} {...props} />;
}

export { mdiCarChildSeat as path };
