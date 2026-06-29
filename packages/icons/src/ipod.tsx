import { mdiIpod } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ipod(props: IconComponentProps) {
  return <Icon path={mdiIpod} {...props} />;
}

export { mdiIpod as path };
