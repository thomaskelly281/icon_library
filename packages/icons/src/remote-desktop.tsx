import { mdiRemoteDesktop } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RemoteDesktop(props: IconComponentProps) {
  return <Icon path={mdiRemoteDesktop} {...props} />;
}

export { mdiRemoteDesktop as path };
