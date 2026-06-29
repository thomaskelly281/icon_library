import { mdiAccountSwitchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountSwitchOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountSwitchOutline} {...props} />;
}

export { mdiAccountSwitchOutline as path };
