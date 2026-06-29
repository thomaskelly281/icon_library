import { mdiAirPurifier } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AirPurifier(props: IconComponentProps) {
  return <Icon path={mdiAirPurifier} {...props} />;
}

export { mdiAirPurifier as path };
