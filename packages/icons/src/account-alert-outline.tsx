import { mdiAccountAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountAlertOutline} {...props} />;
}

export { mdiAccountAlertOutline as path };
