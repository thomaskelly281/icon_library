import { mdiElectricSwitchClosed } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ElectricSwitchClosed(props: IconComponentProps) {
  return <Icon path={mdiElectricSwitchClosed} {...props} />;
}

export { mdiElectricSwitchClosed as path };
