import { mdiSatellite } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Satellite(props: IconComponentProps) {
  return <Icon path={mdiSatellite} {...props} />;
}

export { mdiSatellite as path };
