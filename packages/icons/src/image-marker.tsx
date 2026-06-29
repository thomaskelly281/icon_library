import { mdiImageMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageMarker(props: IconComponentProps) {
  return <Icon path={mdiImageMarker} {...props} />;
}

export { mdiImageMarker as path };
