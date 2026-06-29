import { mdiAccountLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountLock(props: IconComponentProps) {
  return <Icon path={mdiAccountLock} {...props} />;
}

export { mdiAccountLock as path };
