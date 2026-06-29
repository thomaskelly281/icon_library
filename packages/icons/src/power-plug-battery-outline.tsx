import { mdiPowerPlugBatteryOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PowerPlugBatteryOutline(props: IconComponentProps) {
  return <Icon path={mdiPowerPlugBatteryOutline} {...props} />;
}

export { mdiPowerPlugBatteryOutline as path };
