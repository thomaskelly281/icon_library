import { mdiTableLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableLock(props: IconComponentProps) {
  return <Icon path={mdiTableLock} {...props} />;
}

export { mdiTableLock as path };
