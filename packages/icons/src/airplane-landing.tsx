import { mdiAirplaneLanding } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AirplaneLanding(props: IconComponentProps) {
  return <Icon path={mdiAirplaneLanding} {...props} />;
}

export { mdiAirplaneLanding as path };
