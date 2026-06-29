import { mdiPlusLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlusLock(props: IconComponentProps) {
  return <Icon path={mdiPlusLock} {...props} />;
}

export { mdiPlusLock as path };
