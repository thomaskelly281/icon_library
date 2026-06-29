import { mdiWaterThermometer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterThermometer(props: IconComponentProps) {
  return <Icon path={mdiWaterThermometer} {...props} />;
}

export { mdiWaterThermometer as path };
