import { mdiWalletGiftcard } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WalletGiftcard(props: IconComponentProps) {
  return <Icon path={mdiWalletGiftcard} {...props} />;
}

export { mdiWalletGiftcard as path };
