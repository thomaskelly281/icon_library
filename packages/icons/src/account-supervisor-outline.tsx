import { mdiAccountSupervisorOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountSupervisorOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountSupervisorOutline} {...props} />;
}

export { mdiAccountSupervisorOutline as path };
