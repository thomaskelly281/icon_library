import { mdiEarthBoxOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EarthBoxOff(props: IconComponentProps) {
  return <Icon path={mdiEarthBoxOff} {...props} />;
}

export { mdiEarthBoxOff as path };
