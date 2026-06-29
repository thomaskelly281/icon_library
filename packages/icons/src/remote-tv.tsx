import { mdiRemoteTv } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RemoteTv(props: IconComponentProps) {
  return <Icon path={mdiRemoteTv} {...props} />;
}

export { mdiRemoteTv as path };
