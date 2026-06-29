import { mdiAirplanePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AirplanePlus(props: IconComponentProps) {
  return <Icon path={mdiAirplanePlus} {...props} />;
}

export { mdiAirplanePlus as path };
