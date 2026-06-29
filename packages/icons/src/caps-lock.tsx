import { mdiCapsLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CapsLock(props: IconComponentProps) {
  return <Icon path={mdiCapsLock} {...props} />;
}

export { mdiCapsLock as path };
