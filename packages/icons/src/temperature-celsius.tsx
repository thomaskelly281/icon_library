import { mdiTemperatureCelsius } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TemperatureCelsius(props: IconComponentProps) {
  return <Icon path={mdiTemperatureCelsius} {...props} />;
}

export { mdiTemperatureCelsius as path };
