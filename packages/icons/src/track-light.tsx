import { mdiTrackLight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrackLight(props: IconComponentProps) {
  return <Icon path={mdiTrackLight} {...props} />;
}

export { mdiTrackLight as path };
