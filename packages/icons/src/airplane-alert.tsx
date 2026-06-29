import { mdiAirplaneAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AirplaneAlert(props: IconComponentProps) {
  return <Icon path={mdiAirplaneAlert} {...props} />;
}

export { mdiAirplaneAlert as path };
