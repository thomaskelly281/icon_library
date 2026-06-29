import { mdiBookLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookLock(props: IconComponentProps) {
  return <Icon path={mdiBookLock} {...props} />;
}

export { mdiBookLock as path };
