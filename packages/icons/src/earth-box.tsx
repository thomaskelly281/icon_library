import { mdiEarthBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EarthBox(props: IconComponentProps) {
  return <Icon path={mdiEarthBox} {...props} />;
}

export { mdiEarthBox as path };
