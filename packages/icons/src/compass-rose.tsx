import { mdiCompassRose } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CompassRose(props: IconComponentProps) {
  return <Icon path={mdiCompassRose} {...props} />;
}

export { mdiCompassRose as path };
