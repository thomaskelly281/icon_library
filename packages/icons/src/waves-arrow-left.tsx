import { mdiWavesArrowLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WavesArrowLeft(props: IconComponentProps) {
  return <Icon path={mdiWavesArrowLeft} {...props} />;
}

export { mdiWavesArrowLeft as path };
