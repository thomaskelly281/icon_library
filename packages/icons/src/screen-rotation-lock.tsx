import { mdiScreenRotationLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ScreenRotationLock(props: IconComponentProps) {
  return <Icon path={mdiScreenRotationLock} {...props} />;
}

export { mdiScreenRotationLock as path };
