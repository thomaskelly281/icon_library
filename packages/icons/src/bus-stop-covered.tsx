import { mdiBusStopCovered } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BusStopCovered(props: IconComponentProps) {
  return <Icon path={mdiBusStopCovered} {...props} />;
}

export { mdiBusStopCovered as path };
