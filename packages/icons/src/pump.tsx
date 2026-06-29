import { mdiPump } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pump(props: IconComponentProps) {
  return <Icon path={mdiPump} {...props} />;
}

export { mdiPump as path };
