import { mdiMeterElectricOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MeterElectricOutline(props: IconComponentProps) {
  return <Icon path={mdiMeterElectricOutline} {...props} />;
}

export { mdiMeterElectricOutline as path };
