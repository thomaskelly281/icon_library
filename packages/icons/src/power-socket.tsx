import { mdiPowerSocket } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PowerSocket(props: IconComponentProps) {
  return <Icon path={mdiPowerSocket} {...props} />;
}

export { mdiPowerSocket as path };
