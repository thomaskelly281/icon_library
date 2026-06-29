import { mdiWaveUndercurrent } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaveUndercurrent(props: IconComponentProps) {
  return <Icon path={mdiWaveUndercurrent} {...props} />;
}

export { mdiWaveUndercurrent as path };
