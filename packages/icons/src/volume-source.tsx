import { mdiVolumeSource } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VolumeSource(props: IconComponentProps) {
  return <Icon path={mdiVolumeSource} {...props} />;
}

export { mdiVolumeSource as path };
