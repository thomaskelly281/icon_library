import { mdiDevices } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Devices(props: IconComponentProps) {
  return <Icon path={mdiDevices} {...props} />;
}

export { mdiDevices as path };
