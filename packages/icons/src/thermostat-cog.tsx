import { mdiThermostatCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThermostatCog(props: IconComponentProps) {
  return <Icon path={mdiThermostatCog} {...props} />;
}

export { mdiThermostatCog as path };
