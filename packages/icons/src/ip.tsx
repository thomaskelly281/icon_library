import { mdiIp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ip(props: IconComponentProps) {
  return <Icon path={mdiIp} {...props} />;
}

export { mdiIp as path };
