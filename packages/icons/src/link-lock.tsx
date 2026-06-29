import { mdiLinkLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LinkLock(props: IconComponentProps) {
  return <Icon path={mdiLinkLock} {...props} />;
}

export { mdiLinkLock as path };
