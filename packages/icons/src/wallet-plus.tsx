import { mdiWalletPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WalletPlus(props: IconComponentProps) {
  return <Icon path={mdiWalletPlus} {...props} />;
}

export { mdiWalletPlus as path };
