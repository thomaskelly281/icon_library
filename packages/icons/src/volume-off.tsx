import { mdiVolumeOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VolumeOff(props: IconComponentProps) {
  return <Icon path={mdiVolumeOff} {...props} />;
}

export { mdiVolumeOff as path };
