import { mdiThermostatAuto } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThermostatAuto(props: IconComponentProps) {
  return <Icon path={mdiThermostatAuto} {...props} />;
}

export { mdiThermostatAuto as path };
