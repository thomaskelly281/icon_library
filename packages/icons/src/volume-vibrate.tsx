import { mdiVolumeVibrate } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VolumeVibrate(props: IconComponentProps) {
  return <Icon path={mdiVolumeVibrate} {...props} />;
}

export { mdiVolumeVibrate as path };
