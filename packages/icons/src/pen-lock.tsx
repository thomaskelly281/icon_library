import { mdiPenLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PenLock(props: IconComponentProps) {
  return <Icon path={mdiPenLock} {...props} />;
}

export { mdiPenLock as path };
