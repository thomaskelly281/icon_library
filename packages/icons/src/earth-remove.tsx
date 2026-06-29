import { mdiEarthRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EarthRemove(props: IconComponentProps) {
  return <Icon path={mdiEarthRemove} {...props} />;
}

export { mdiEarthRemove as path };
