import { mdiAirplaneMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AirplaneMinus(props: IconComponentProps) {
  return <Icon path={mdiAirplaneMinus} {...props} />;
}

export { mdiAirplaneMinus as path };
