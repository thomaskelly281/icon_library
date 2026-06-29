import { mdiWalletPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WalletPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiWalletPlusOutline} {...props} />;
}

export { mdiWalletPlusOutline as path };
