import { mdiOutdoorLamp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OutdoorLamp(props: IconComponentProps) {
  return <Icon path={mdiOutdoorLamp} {...props} />;
}

export { mdiOutdoorLamp as path };
