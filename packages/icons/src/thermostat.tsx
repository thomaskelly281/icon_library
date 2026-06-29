import { mdiThermostat } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Thermostat(props: IconComponentProps) {
  return <Icon path={mdiThermostat} {...props} />;
}

export { mdiThermostat as path };
