import { mdiAirplaneRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AirplaneRemove(props: IconComponentProps) {
  return <Icon path={mdiAirplaneRemove} {...props} />;
}

export { mdiAirplaneRemove as path };
