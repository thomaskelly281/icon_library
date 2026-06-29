import { mdiMarkerCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MarkerCheck(props: IconComponentProps) {
  return <Icon path={mdiMarkerCheck} {...props} />;
}

export { mdiMarkerCheck as path };
