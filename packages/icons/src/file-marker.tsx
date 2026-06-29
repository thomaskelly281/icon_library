import { mdiFileMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileMarker(props: IconComponentProps) {
  return <Icon path={mdiFileMarker} {...props} />;
}

export { mdiFileMarker as path };
