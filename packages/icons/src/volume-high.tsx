import { mdiVolumeHigh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VolumeHigh(props: IconComponentProps) {
  return <Icon path={mdiVolumeHigh} {...props} />;
}

export { mdiVolumeHigh as path };
