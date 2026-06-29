import { mdiElectricSwitch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ElectricSwitch(props: IconComponentProps) {
  return <Icon path={mdiElectricSwitch} {...props} />;
}

export { mdiElectricSwitch as path };
