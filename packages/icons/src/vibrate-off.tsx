import { mdiVibrateOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VibrateOff(props: IconComponentProps) {
  return <Icon path={mdiVibrateOff} {...props} />;
}

export { mdiVibrateOff as path };
