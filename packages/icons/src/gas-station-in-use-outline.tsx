import { mdiGasStationInUseOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GasStationInUseOutline(props: IconComponentProps) {
  return <Icon path={mdiGasStationInUseOutline} {...props} />;
}

export { mdiGasStationInUseOutline as path };
