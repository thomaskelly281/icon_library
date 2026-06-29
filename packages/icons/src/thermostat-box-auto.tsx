import { mdiThermostatBoxAuto } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThermostatBoxAuto(props: IconComponentProps) {
  return <Icon path={mdiThermostatBoxAuto} {...props} />;
}

export { mdiThermostatBoxAuto as path };
