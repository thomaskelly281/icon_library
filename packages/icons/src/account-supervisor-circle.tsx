import { mdiAccountSupervisorCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountSupervisorCircle(props: IconComponentProps) {
  return <Icon path={mdiAccountSupervisorCircle} {...props} />;
}

export { mdiAccountSupervisorCircle as path };
