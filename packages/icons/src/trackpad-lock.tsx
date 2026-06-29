import { mdiTrackpadLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrackpadLock(props: IconComponentProps) {
  return <Icon path={mdiTrackpadLock} {...props} />;
}

export { mdiTrackpadLock as path };
