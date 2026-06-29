import { mdiLandPlotsMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LandPlotsMarker(props: IconComponentProps) {
  return <Icon path={mdiLandPlotsMarker} {...props} />;
}

export { mdiLandPlotsMarker as path };
