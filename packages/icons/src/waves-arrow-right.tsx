import { mdiWavesArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WavesArrowRight(props: IconComponentProps) {
  return <Icon path={mdiWavesArrowRight} {...props} />;
}

export { mdiWavesArrowRight as path };
