import { mdiHeadsetDock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadsetDock(props: IconComponentProps) {
  return <Icon path={mdiHeadsetDock} {...props} />;
}

export { mdiHeadsetDock as path };
