import { mdiEarthPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EarthPlus(props: IconComponentProps) {
  return <Icon path={mdiEarthPlus} {...props} />;
}

export { mdiEarthPlus as path };
