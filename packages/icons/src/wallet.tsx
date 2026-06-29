import { mdiWallet } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Wallet(props: IconComponentProps) {
  return <Icon path={mdiWallet} {...props} />;
}

export { mdiWallet as path };
