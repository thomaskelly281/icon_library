import { mdiHomeMapMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeMapMarker(props: IconComponentProps) {
  return <Icon path={mdiHomeMapMarker} {...props} />;
}

export { mdiHomeMapMarker as path };
