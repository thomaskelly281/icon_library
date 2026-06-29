import { mdiGarageLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GarageLock(props: IconComponentProps) {
  return <Icon path={mdiGarageLock} {...props} />;
}

export { mdiGarageLock as path };
