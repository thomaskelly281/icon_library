import { mdiEarthArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EarthArrowRight(props: IconComponentProps) {
  return <Icon path={mdiEarthArrowRight} {...props} />;
}

export { mdiEarthArrowRight as path };
