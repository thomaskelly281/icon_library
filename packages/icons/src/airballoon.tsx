import { mdiAirballoon } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Airballoon(props: IconComponentProps) {
  return <Icon path={mdiAirballoon} {...props} />;
}

export { mdiAirballoon as path };
