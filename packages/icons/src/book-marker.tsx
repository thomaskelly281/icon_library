import { mdiBookMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookMarker(props: IconComponentProps) {
  return <Icon path={mdiBookMarker} {...props} />;
}

export { mdiBookMarker as path };
