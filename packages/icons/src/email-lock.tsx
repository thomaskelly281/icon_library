import { mdiEmailLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailLock(props: IconComponentProps) {
  return <Icon path={mdiEmailLock} {...props} />;
}

export { mdiEmailLock as path };
