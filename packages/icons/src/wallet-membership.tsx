import { mdiWalletMembership } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WalletMembership(props: IconComponentProps) {
  return <Icon path={mdiWalletMembership} {...props} />;
}

export { mdiWalletMembership as path };
