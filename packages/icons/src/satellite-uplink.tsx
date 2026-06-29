import { mdiSatelliteUplink } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SatelliteUplink(props: IconComponentProps) {
  return <Icon path={mdiSatelliteUplink} {...props} />;
}

export { mdiSatelliteUplink as path };
