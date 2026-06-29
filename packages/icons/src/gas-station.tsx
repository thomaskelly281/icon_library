import { mdiGasStation } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GasStation(props: IconComponentProps) {
  return <Icon path={mdiGasStation} {...props} />;
}

export { mdiGasStation as path };
