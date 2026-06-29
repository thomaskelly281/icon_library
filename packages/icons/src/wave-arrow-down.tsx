import { mdiWaveArrowDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaveArrowDown(props: IconComponentProps) {
  return <Icon path={mdiWaveArrowDown} {...props} />;
}

export { mdiWaveArrowDown as path };
