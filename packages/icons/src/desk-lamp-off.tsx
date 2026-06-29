import { mdiDeskLampOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DeskLampOff(props: IconComponentProps) {
  return <Icon path={mdiDeskLampOff} {...props} />;
}

export { mdiDeskLampOff as path };
