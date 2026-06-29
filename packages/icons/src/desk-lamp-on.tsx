import { mdiDeskLampOn } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DeskLampOn(props: IconComponentProps) {
  return <Icon path={mdiDeskLampOn} {...props} />;
}

export { mdiDeskLampOn as path };
