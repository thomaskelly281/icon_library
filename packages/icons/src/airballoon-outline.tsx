import { mdiAirballoonOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AirballoonOutline(props: IconComponentProps) {
  return <Icon path={mdiAirballoonOutline} {...props} />;
}

export { mdiAirballoonOutline as path };
