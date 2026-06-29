import { mdiMeterGasOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MeterGasOutline(props: IconComponentProps) {
  return <Icon path={mdiMeterGasOutline} {...props} />;
}

export { mdiMeterGasOutline as path };
