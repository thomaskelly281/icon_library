import { mdiPlusLockOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlusLockOpen(props: IconComponentProps) {
  return <Icon path={mdiPlusLockOpen} {...props} />;
}

export { mdiPlusLockOpen as path };
