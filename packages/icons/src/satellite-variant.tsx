import { mdiSatelliteVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SatelliteVariant(props: IconComponentProps) {
  return <Icon path={mdiSatelliteVariant} {...props} />;
}

export { mdiSatelliteVariant as path };
