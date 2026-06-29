import { mdiHeatPump } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeatPump(props: IconComponentProps) {
  return <Icon path={mdiHeatPump} {...props} />;
}

export { mdiHeatPump as path };
