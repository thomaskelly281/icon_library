import { mdiElevationRise } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ElevationRise(props: IconComponentProps) {
  return <Icon path={mdiElevationRise} {...props} />;
}

export { mdiElevationRise as path };
