import { mdiMapbox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Mapbox(props: IconComponentProps) {
  return <Icon path={mdiMapbox} {...props} />;
}

export { mdiMapbox as path };
