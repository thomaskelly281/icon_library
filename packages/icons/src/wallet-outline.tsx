import { mdiWalletOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WalletOutline(props: IconComponentProps) {
  return <Icon path={mdiWalletOutline} {...props} />;
}

export { mdiWalletOutline as path };
