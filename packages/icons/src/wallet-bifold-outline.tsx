import { mdiWalletBifoldOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WalletBifoldOutline(props: IconComponentProps) {
  return <Icon path={mdiWalletBifoldOutline} {...props} />;
}

export { mdiWalletBifoldOutline as path };
