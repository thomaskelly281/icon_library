import { mdiTemperatureFahrenheit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TemperatureFahrenheit(props: IconComponentProps) {
  return <Icon path={mdiTemperatureFahrenheit} {...props} />;
}

export { mdiTemperatureFahrenheit as path };
