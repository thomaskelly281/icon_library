import { mdiWalletBifold } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WalletBifold(props: IconComponentProps) {
  return <Icon path={mdiWalletBifold} {...props} />;
}

export { mdiWalletBifold as path };
