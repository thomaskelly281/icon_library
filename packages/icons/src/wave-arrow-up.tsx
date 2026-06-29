import { mdiWaveArrowUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaveArrowUp(props: IconComponentProps) {
  return <Icon path={mdiWaveArrowUp} {...props} />;
}

export { mdiWaveArrowUp as path };
