import { mdiLockerMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockerMultiple(props: IconComponentProps) {
  return <Icon path={mdiLockerMultiple} {...props} />;
}

export { mdiLockerMultiple as path };
