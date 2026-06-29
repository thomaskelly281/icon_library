import { mdiFlashlightOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlashlightOff(props: IconComponentProps) {
  return <Icon path={mdiFlashlightOff} {...props} />;
}

export { mdiFlashlightOff as path };
