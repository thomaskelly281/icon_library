import { mdiAirConditioner } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AirConditioner(props: IconComponentProps) {
  return <Icon path={mdiAirConditioner} {...props} />;
}

export { mdiAirConditioner as path };
