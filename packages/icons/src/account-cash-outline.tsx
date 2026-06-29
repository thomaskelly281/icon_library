import { mdiAccountCashOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountCashOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountCashOutline} {...props} />;
}

export { mdiAccountCashOutline as path };
