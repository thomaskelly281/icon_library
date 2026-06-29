import { mdiAirFilter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AirFilter(props: IconComponentProps) {
  return <Icon path={mdiAirFilter} {...props} />;
}

export { mdiAirFilter as path };
