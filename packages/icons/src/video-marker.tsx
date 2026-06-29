import { mdiVideoMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoMarker(props: IconComponentProps) {
  return <Icon path={mdiVideoMarker} {...props} />;
}

export { mdiVideoMarker as path };
