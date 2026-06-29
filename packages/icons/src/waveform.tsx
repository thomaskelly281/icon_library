import { mdiWaveform } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Waveform(props: IconComponentProps) {
  return <Icon path={mdiWaveform} {...props} />;
}

export { mdiWaveform as path };
