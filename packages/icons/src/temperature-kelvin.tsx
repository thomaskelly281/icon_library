import { mdiTemperatureKelvin } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TemperatureKelvin(props: IconComponentProps) {
  return <Icon path={mdiTemperatureKelvin} {...props} />;
}

export { mdiTemperatureKelvin as path };
