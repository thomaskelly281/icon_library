import { mdiVolumeEqual } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VolumeEqual(props: IconComponentProps) {
  return <Icon path={mdiVolumeEqual} {...props} />;
}

export { mdiVolumeEqual as path };
