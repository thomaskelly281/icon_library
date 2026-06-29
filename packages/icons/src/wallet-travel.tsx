import { mdiWalletTravel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WalletTravel(props: IconComponentProps) {
  return <Icon path={mdiWalletTravel} {...props} />;
}

export { mdiWalletTravel as path };
