import { mdiCameraBurst } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraBurst(props: IconComponentProps) {
  return <Icon path={mdiCameraBurst} {...props} />;
}

export { mdiCameraBurst as path };
