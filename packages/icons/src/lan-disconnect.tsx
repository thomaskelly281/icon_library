import { mdiLanDisconnect } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LanDisconnect(props: IconComponentProps) {
  return <Icon path={mdiLanDisconnect} {...props} />;
}

export { mdiLanDisconnect as path };
