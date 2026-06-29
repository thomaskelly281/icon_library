import { mdiEightTrack } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EightTrack(props: IconComponentProps) {
  return <Icon path={mdiEightTrack} {...props} />;
}

export { mdiEightTrack as path };
