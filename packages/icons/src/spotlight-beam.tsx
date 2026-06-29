import { mdiSpotlightBeam } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SpotlightBeam(props: IconComponentProps) {
  return <Icon path={mdiSpotlightBeam} {...props} />;
}

export { mdiSpotlightBeam as path };
