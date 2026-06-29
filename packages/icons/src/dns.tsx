import { mdiDns } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Dns(props: IconComponentProps) {
  return <Icon path={mdiDns} {...props} />;
}

export { mdiDns as path };
