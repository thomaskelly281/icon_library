import { mdiHeadsetOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadsetOff(props: IconComponentProps) {
  return <Icon path={mdiHeadsetOff} {...props} />;
}

export { mdiHeadsetOff as path };
