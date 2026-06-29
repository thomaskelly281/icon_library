import { mdiRemoteTvOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RemoteTvOff(props: IconComponentProps) {
  return <Icon path={mdiRemoteTvOff} {...props} />;
}

export { mdiRemoteTvOff as path };
