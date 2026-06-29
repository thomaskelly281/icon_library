import { mdiLocker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Locker(props: IconComponentProps) {
  return <Icon path={mdiLocker} {...props} />;
}

export { mdiLocker as path };
