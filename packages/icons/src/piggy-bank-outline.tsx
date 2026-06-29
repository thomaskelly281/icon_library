import { mdiPiggyBankOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PiggyBankOutline(props: IconComponentProps) {
  return <Icon path={mdiPiggyBankOutline} {...props} />;
}

export { mdiPiggyBankOutline as path };
