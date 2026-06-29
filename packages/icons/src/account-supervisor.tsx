import { mdiAccountSupervisor } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountSupervisor(props: IconComponentProps) {
  return <Icon path={mdiAccountSupervisor} {...props} />;
}

export { mdiAccountSupervisor as path };
