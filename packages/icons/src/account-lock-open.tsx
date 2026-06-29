import { mdiAccountLockOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountLockOpen(props: IconComponentProps) {
  return <Icon path={mdiAccountLockOpen} {...props} />;
}

export { mdiAccountLockOpen as path };
