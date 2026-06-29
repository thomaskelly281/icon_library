import { mdiEarthMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EarthMinus(props: IconComponentProps) {
  return <Icon path={mdiEarthMinus} {...props} />;
}

export { mdiEarthMinus as path };
