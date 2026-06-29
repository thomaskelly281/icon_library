import { mdiPoliceStation } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PoliceStation(props: IconComponentProps) {
  return <Icon path={mdiPoliceStation} {...props} />;
}

export { mdiPoliceStation as path };
