import { mdiEarthArrowUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EarthArrowUp(props: IconComponentProps) {
  return <Icon path={mdiEarthArrowUp} {...props} />;
}

export { mdiEarthArrowUp as path };
