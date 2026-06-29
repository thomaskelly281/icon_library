import { mdiPlayBoxLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlayBoxLock(props: IconComponentProps) {
  return <Icon path={mdiPlayBoxLock} {...props} />;
}

export { mdiPlayBoxLock as path };
