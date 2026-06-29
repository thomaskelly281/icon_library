import { mdiFloorLamp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FloorLamp(props: IconComponentProps) {
  return <Icon path={mdiFloorLamp} {...props} />;
}

export { mdiFloorLamp as path };
