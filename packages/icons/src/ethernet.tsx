import { mdiEthernet } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ethernet(props: IconComponentProps) {
  return <Icon path={mdiEthernet} {...props} />;
}

export { mdiEthernet as path };
