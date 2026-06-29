import { mdiGasStationOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GasStationOutline(props: IconComponentProps) {
  return <Icon path={mdiGasStationOutline} {...props} />;
}

export { mdiGasStationOutline as path };
