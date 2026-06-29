import { mdiEarthOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EarthOff(props: IconComponentProps) {
  return <Icon path={mdiEarthOff} {...props} />;
}

export { mdiEarthOff as path };
