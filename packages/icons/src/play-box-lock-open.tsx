import { mdiPlayBoxLockOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlayBoxLockOpen(props: IconComponentProps) {
  return <Icon path={mdiPlayBoxLockOpen} {...props} />;
}

export { mdiPlayBoxLockOpen as path };
