import { mdiRemoteOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RemoteOff(props: IconComponentProps) {
  return <Icon path={mdiRemoteOff} {...props} />;
}

export { mdiRemoteOff as path };
