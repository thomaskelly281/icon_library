import { mdiMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Marker(props: IconComponentProps) {
  return <Icon path={mdiMarker} {...props} />;
}

export { mdiMarker as path };
