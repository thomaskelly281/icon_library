import { mdiAirplaneSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AirplaneSearch(props: IconComponentProps) {
  return <Icon path={mdiAirplaneSearch} {...props} />;
}

export { mdiAirplaneSearch as path };
