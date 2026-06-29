import { mdiCompassOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CompassOff(props: IconComponentProps) {
  return <Icon path={mdiCompassOff} {...props} />;
}

export { mdiCompassOff as path };
