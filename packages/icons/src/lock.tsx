import { mdiLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Lock(props: IconComponentProps) {
  return <Icon path={mdiLock} {...props} />;
}

export { mdiLock as path };
