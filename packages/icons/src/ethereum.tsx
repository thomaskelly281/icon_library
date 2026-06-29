import { mdiEthereum } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ethereum(props: IconComponentProps) {
  return <Icon path={mdiEthereum} {...props} />;
}

export { mdiEthereum as path };
