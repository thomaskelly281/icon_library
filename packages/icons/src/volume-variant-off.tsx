import { mdiVolumeVariantOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VolumeVariantOff(props: IconComponentProps) {
  return <Icon path={mdiVolumeVariantOff} {...props} />;
}

export { mdiVolumeVariantOff as path };
