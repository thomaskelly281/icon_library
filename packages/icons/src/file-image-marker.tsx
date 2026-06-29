import { mdiFileImageMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileImageMarker(props: IconComponentProps) {
  return <Icon path={mdiFileImageMarker} {...props} />;
}

export { mdiFileImageMarker as path };
