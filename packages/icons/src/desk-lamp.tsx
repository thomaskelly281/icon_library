import { mdiDeskLamp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DeskLamp(props: IconComponentProps) {
  return <Icon path={mdiDeskLamp} {...props} />;
}

export { mdiDeskLamp as path };
