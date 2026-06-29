import { mdiEarthArrowDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EarthArrowDown(props: IconComponentProps) {
  return <Icon path={mdiEarthArrowDown} {...props} />;
}

export { mdiEarthArrowDown as path };
