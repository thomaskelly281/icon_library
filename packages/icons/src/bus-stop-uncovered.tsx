import { mdiBusStopUncovered } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BusStopUncovered(props: IconComponentProps) {
  return <Icon path={mdiBusStopUncovered} {...props} />;
}

export { mdiBusStopUncovered as path };
