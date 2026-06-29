import { mdiHeatPumpOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeatPumpOutline(props: IconComponentProps) {
  return <Icon path={mdiHeatPumpOutline} {...props} />;
}

export { mdiHeatPumpOutline as path };
