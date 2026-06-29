import { mdiThermostatBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThermostatBox(props: IconComponentProps) {
  return <Icon path={mdiThermostatBox} {...props} />;
}

export { mdiThermostatBox as path };
