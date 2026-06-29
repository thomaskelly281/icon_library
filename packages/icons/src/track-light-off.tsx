import { mdiTrackLightOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrackLightOff(props: IconComponentProps) {
  return <Icon path={mdiTrackLightOff} {...props} />;
}

export { mdiTrackLightOff as path };
