import { mdiHeatWave } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeatWave(props: IconComponentProps) {
  return <Icon path={mdiHeatWave} {...props} />;
}

export { mdiHeatWave as path };
