import { mdiEarthBoxPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EarthBoxPlus(props: IconComponentProps) {
  return <Icon path={mdiEarthBoxPlus} {...props} />;
}

export { mdiEarthBoxPlus as path };
