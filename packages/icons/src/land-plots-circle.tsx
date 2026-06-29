import { mdiLandPlotsCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LandPlotsCircle(props: IconComponentProps) {
  return <Icon path={mdiLandPlotsCircle} {...props} />;
}

export { mdiLandPlotsCircle as path };
