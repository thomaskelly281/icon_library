import { mdiWavesArrowUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WavesArrowUp(props: IconComponentProps) {
  return <Icon path={mdiWavesArrowUp} {...props} />;
}

export { mdiWavesArrowUp as path };
