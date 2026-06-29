import { mdiBookLockOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookLockOpen(props: IconComponentProps) {
  return <Icon path={mdiBookLockOpen} {...props} />;
}

export { mdiBookLockOpen as path };
